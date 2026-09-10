// 持久化状态：node:sqlite 单库存储 run、task、缓存实体与快照记录。
// 复杂值以 JSON 列存储并通过 schema 往返校验；简单标量使用普通列。
// 每个成功请求在事务内同时写业务实体、校验器与 task 成功状态。

import type { ZodType } from 'zod'
import type { ApiHost, CompletePluginSnapshot, DownloadPoint, GitHubRepositoryCache, GitHubRepositoryOutcome, PackageDownloads, PackageMetadataCache, PackageMetadataOutcome, PackageTarget, PluginDefinition, Presence, PublishedSnapshot, ReplicationSnapshot, RequestFailure, Result, StateStore, StoredEntityCount, StoredTaskSummary, SyncRun } from './contracts'
import { mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { DatabaseSync } from 'node:sqlite'
import {
  absent,

  failure,

  ok,

  present,

} from './contracts'
import {
  githubRepositoryCacheSchema,
  packageMetadataCacheSchema,
  storedTaskSummarySchema,
  syncRunSchema,
} from './schemas'

export interface StateStoreOptions {
  databasePath: string
  nowIso: () => string
}

const DATABASE_SCHEMA = `
CREATE TABLE IF NOT EXISTS sync_runs (
  run_id TEXT PRIMARY KEY,
  status TEXT,
  started_at TEXT,
  run_json TEXT
);
CREATE TABLE IF NOT EXISTS replication_packages (
  run_id TEXT,
  package_name TEXT,
  revision TEXT,
  directory TEXT,
  plugin_type TEXT,
  icon TEXT,
  prefix TEXT,
  PRIMARY KEY (run_id, package_name)
);
CREATE TABLE IF NOT EXISTS package_metadata_cache (
  package_name TEXT PRIMARY KEY,
  cache_json TEXT
);
CREATE TABLE IF NOT EXISTS download_points_working (
  run_id TEXT,
  period_kind TEXT,
  package_name TEXT,
  downloads INTEGER,
  start_date TEXT,
  end_date TEXT,
  PRIMARY KEY (run_id, period_kind, package_name)
);
CREATE TABLE IF NOT EXISTS github_repository_cache (
  full_name TEXT PRIMARY KEY,
  cache_json TEXT
);
CREATE TABLE IF NOT EXISTS sync_tasks (
  run_id TEXT,
  source TEXT,
  task_key TEXT,
  status TEXT,
  attempt INTEGER,
  detail_json TEXT,
  PRIMARY KEY (run_id, source, task_key)
);
CREATE TABLE IF NOT EXISTS published_snapshots (
  snapshot_id TEXT PRIMARY KEY,
  snapshot_json TEXT
);
`

const DEFINITION_DIRECTORIES: readonly PluginDefinition['directory'][] = ['vite', 'rollup', 'rolldown', 'unplugin']
const DEFINITION_TYPES: readonly PluginDefinition['type'][] = ['vite-plugin', 'rollup-plugin', 'rolldown-plugin', 'unplugin']

function storageFailure(operation: string, message: string): RequestFailure {
  return { kind: 'storage', operation, message }
}

function errorMessage(error: Error): string {
  return error.message
}

export function openStateStore(options: StateStoreOptions): StateStore {
  mkdirSync(dirname(options.databasePath), { recursive: true })
  const database = new DatabaseSync(options.databasePath)
  database.exec('PRAGMA journal_mode = WAL')
  database.exec('PRAGMA synchronous = NORMAL')
  database.exec(DATABASE_SCHEMA)

  function withTransaction<T>(operation: () => T): T {
    database.exec('BEGIN')
    try {
      const value = operation()
      database.exec('COMMIT')
      return value
    }
    catch (error) {
      database.exec('ROLLBACK')
      throw error
    }
  }

  function decodeJson<T>(schema: ZodType<T>, raw: string, operation: string): Result<T, RequestFailure> {
    if (typeof raw !== 'string')
      return failure(storageFailure(operation, 'stored payload is not a json string'))
    let parsedValue: object
    try {
      parsedValue = JSON.parse(raw)
    }
    catch (error) {
      if (error instanceof Error)
        return failure(storageFailure(operation, `stored json is not parseable: ${errorMessage(error)}`))
      return failure(storageFailure(operation, 'stored json is not parseable'))
    }
    const validated = schema.safeParse(parsedValue)
    if (!validated.success) {
      return failure(storageFailure(operation, `stored json failed schema validation: ${validated.error.issues[0]?.message ?? ''}`))
    }
    return ok(validated.data)
  }

  function readTextRows(sql: string, parameters: readonly string[], operation: string): Result<readonly string[], RequestFailure> {
    try {
      const rows = database.prepare(sql).all(...parameters)
      const payloads: string[] = []
      for (const row of rows) {
        const payload = (row as Record<string, object>).payload
        if (typeof payload !== 'string')
          return failure(storageFailure(operation, 'stored row payload is not a string'))
        payloads.push(payload)
      }
      return ok(payloads)
    }
    catch (error) {
      if (error instanceof Error)
        return failure(storageFailure(operation, errorMessage(error)))
      return failure(storageFailure(operation, 'database read failed'))
    }
  }

  function readAllJson<T>(schema: ZodType<T>, sql: string, operation: string): Result<readonly T[], RequestFailure> {
    const payloads = readTextRows(sql, [], operation)
    if (!payloads.ok)
      return payloads
    const decoded: T[] = []
    for (const payload of payloads.value) {
      const entry = decodeJson(schema, payload, operation)
      if (!entry.ok)
        return entry
      decoded.push(entry.value)
    }
    return ok(decoded)
  }

  function readSingleJson<T>(schema: ZodType<T>, sql: string, parameters: readonly string[], operation: string): Result<Presence<T>, RequestFailure> {
    try {
      const row = database.prepare(sql).get(...parameters) as Record<string, object> | void
      if (typeof row !== 'object')
        return ok(absent<T>())
      const payload = row.payload
      if (typeof payload !== 'string')
        return failure(storageFailure(operation, 'stored row payload is not a string'))
      const decoded = decodeJson(schema, payload, operation)
      if (!decoded.ok)
        return failure(decoded.error)
      return ok(present(decoded.value))
    }
    catch (error) {
      if (error instanceof Error)
        return failure(storageFailure(operation, errorMessage(error)))
      return failure(storageFailure(operation, 'database read failed'))
    }
  }

  const store: StateStore = {
    readPackageMetadataCaches(): Promise<Result<readonly PackageMetadataCache[], RequestFailure>> {
      return Promise.resolve(readAllJson(
        packageMetadataCacheSchema,
        'SELECT cache_json AS payload FROM package_metadata_cache ORDER BY package_name',
        'read-package-metadata-caches',
      ))
    },

    readGitHubCaches(): Promise<Result<readonly GitHubRepositoryCache[], RequestFailure>> {
      return Promise.resolve(readAllJson(
        githubRepositoryCacheSchema,
        'SELECT cache_json AS payload FROM github_repository_cache ORDER BY full_name',
        'read-github-caches',
      ))
    },

    readWorkingDownloadPoints(runId: string): Promise<Result<readonly DownloadPoint[], RequestFailure>> {
      try {
        const rows = database
          .prepare('SELECT package_name, downloads, start_date, end_date FROM download_points_working WHERE run_id = ?')
          .all(runId) as Record<string, object>[]
        const points: DownloadPoint[] = []
        for (const row of rows) {
          const packageName = row.package_name
          const downloads = row.downloads
          const startDate = row.start_date
          const endDate = row.end_date
          if (typeof packageName !== 'string' || typeof downloads !== 'number' || typeof startDate !== 'string' || typeof endDate !== 'string')
            return Promise.resolve(failure(storageFailure('read-working-download-points', 'stored download point row has unexpected column types')))
          if (!Number.isSafeInteger(downloads) || downloads < 0)
            return Promise.resolve(failure(storageFailure('read-working-download-points', `stored download count for "${packageName}" is not a non-negative integer`)))
          points.push({ packageName, downloads, start: startDate, end: endDate })
        }
        return Promise.resolve(ok(points))
      }
      catch (error) {
        if (error instanceof Error)
          return Promise.resolve(failure(storageFailure('read-working-download-points', errorMessage(error))))
        return Promise.resolve(failure(storageFailure('read-working-download-points', 'database read failed')))
      }
    },

    readReplicationSnapshot(runId: string): Promise<Result<Presence<readonly PackageTarget[]>, RequestFailure>> {
      try {
        const rows = database
          .prepare('SELECT package_name, revision, directory, plugin_type, icon, prefix FROM replication_packages WHERE run_id = ? ORDER BY package_name')
          .all(runId) as Record<string, object>[]
        if (rows.length === 0)
          return Promise.resolve(ok(absent<readonly PackageTarget[]>()))
        const packages: PackageTarget[] = []
        for (const row of rows) {
          const packageName = row.package_name
          const revision = row.revision
          const directory = row.directory
          const pluginType = row.plugin_type
          const icon = row.icon
          const prefix = row.prefix
          if (typeof packageName !== 'string' || typeof revision !== 'string' || typeof directory !== 'string' || typeof pluginType !== 'string' || typeof icon !== 'string' || typeof prefix !== 'string')
            return Promise.resolve(failure(storageFailure('read-replication-snapshot', 'stored replication row has unexpected column types')))
          if (!DEFINITION_DIRECTORIES.includes(directory as PluginDefinition['directory']))
            return Promise.resolve(failure(storageFailure('read-replication-snapshot', `stored directory "${directory}" is not a known plugin directory`)))
          if (!DEFINITION_TYPES.includes(pluginType as PluginDefinition['type']))
            return Promise.resolve(failure(storageFailure('read-replication-snapshot', `stored plugin type "${pluginType}" is not a known plugin type`)))
          packages.push({
            packageName,
            revision,
            definition: {
              directory: directory as PluginDefinition['directory'],
              packageNamePrefix: prefix,
              type: pluginType as PluginDefinition['type'],
              icon,
            },
          })
        }
        return Promise.resolve(ok(present(packages)))
      }
      catch (error) {
        if (error instanceof Error)
          return Promise.resolve(failure(storageFailure('read-replication-snapshot', errorMessage(error))))
        return Promise.resolve(failure(storageFailure('read-replication-snapshot', 'database read failed')))
      }
    },

    readTaskSummaries(runId: string): Promise<Result<readonly StoredTaskSummary[], RequestFailure>> {
      try {
        const rows = database
          .prepare('SELECT source, task_key, status, detail_json FROM sync_tasks WHERE run_id = ?')
          .all(runId) as Record<string, object>[]
        const summaries: StoredTaskSummary[] = []
        for (const row of rows) {
          const source = row.source
          const taskKey = row.task_key
          const status = row.status
          const detailJson = row.detail_json
          if (typeof source !== 'string' || typeof taskKey !== 'string' || typeof status !== 'string' || typeof detailJson !== 'string')
            return Promise.resolve(failure(storageFailure('read-task-summaries', 'stored task row has unexpected column types')))
          const detail = decodeJson(storedTaskSummarySchema, JSON.stringify({
            source,
            taskKey,
            status,
            detail: JSON.parse(detailJson),
          }), 'read-task-summaries')
          if (!detail.ok)
            return Promise.resolve(failure(detail.error))
          summaries.push({
            source: detail.value.source,
            taskKey: detail.value.taskKey,
            status: detail.value.status,
          })
        }
        return Promise.resolve(ok(summaries))
      }
      catch (error) {
        if (error instanceof Error)
          return Promise.resolve(failure(storageFailure('read-task-summaries', errorMessage(error))))
        return Promise.resolve(failure(storageFailure('read-task-summaries', 'database read failed')))
      }
    },

    findResumableRun(): Promise<Result<Presence<SyncRun>, RequestFailure>> {
      const found = readSingleJson(
        syncRunSchema,
        'SELECT run_json AS payload FROM sync_runs WHERE status = \'running\' ORDER BY started_at DESC LIMIT 1',
        [],
        'find-resumable-run',
      )
      return Promise.resolve(found)
    },

    async createRun(run: SyncRun): Promise<Result<SyncRun, RequestFailure>> {
      try {
        withTransaction(() => {
          database
            .prepare('INSERT INTO sync_runs (run_id, status, started_at, run_json) VALUES (?, ?, ?, ?)')
            .run(run.runId, run.status, run.startedAt, JSON.stringify(run))
        })
        return ok(run)
      }
      catch (error) {
        if (error instanceof Error)
          return failure(storageFailure('create-run', errorMessage(error)))
        return failure(storageFailure('create-run', 'database write failed'))
      }
    },

    async updateRun(run: SyncRun): Promise<Result<SyncRun, RequestFailure>> {
      try {
        withTransaction(() => {
          database
            .prepare('INSERT INTO sync_runs (run_id, status, started_at, run_json) VALUES (?, ?, ?, ?) ON CONFLICT(run_id) DO UPDATE SET status = excluded.status, run_json = excluded.run_json')
            .run(run.runId, run.status, run.startedAt, JSON.stringify(run))
        })
        return ok(run)
      }
      catch (error) {
        if (error instanceof Error)
          return failure(storageFailure('update-run', errorMessage(error)))
        return failure(storageFailure('update-run', 'database write failed'))
      }
    },

    async saveReplicationSnapshot(runId: string, snapshot: ReplicationSnapshot): Promise<Result<StoredEntityCount, RequestFailure>> {
      try {
        const count = withTransaction(() => {
          database.prepare('DELETE FROM replication_packages WHERE run_id = ?').run(runId)
          const statement = database.prepare('INSERT INTO replication_packages (run_id, package_name, revision, directory, plugin_type, icon, prefix) VALUES (?, ?, ?, ?, ?, ?, ?)')
          let written = 0
          for (const target of snapshot.packages) {
            statement.run(
              runId,
              target.packageName,
              target.revision,
              target.definition.directory,
              target.definition.type,
              target.definition.icon,
              target.definition.packageNamePrefix,
            )
            written += 1
          }
          return written
        })
        if (count !== snapshot.packages.length) {
          return failure(storageFailure('save-replication-snapshot', `written rows (${count}) do not match input count (${snapshot.packages.length})`))
        }
        return ok({ count })
      }
      catch (error) {
        if (error instanceof Error)
          return failure(storageFailure('save-replication-snapshot', errorMessage(error)))
        return failure(storageFailure('save-replication-snapshot', 'database write failed'))
      }
    },

    async savePackageMetadata(runId: string, outcomes: readonly PackageMetadataOutcome[]): Promise<Result<StoredEntityCount, RequestFailure>> {
      try {
        const count = withTransaction(() => {
          const cacheStatement = database.prepare('INSERT INTO package_metadata_cache (package_name, cache_json) VALUES (?, ?) ON CONFLICT(package_name) DO UPDATE SET cache_json = excluded.cache_json')
          const taskStatement = database.prepare('INSERT INTO sync_tasks (run_id, source, task_key, status, attempt, detail_json) VALUES (?, \'npm-registry\', ?, \'success\', ?, ?) ON CONFLICT(run_id, source, task_key) DO UPDATE SET status = excluded.status, attempt = excluded.attempt, detail_json = excluded.detail_json')
          let written = 0
          for (const outcome of outcomes) {
            cacheStatement.run(outcome.cache.packageName, JSON.stringify(outcome.cache))
            taskStatement.run(runId, outcome.record.target.packageName, outcome.attempts, JSON.stringify({
              completedAt: options.nowIso(),
              responseStatus: outcome.record.validation === 'response-200' ? 200 : 304,
            }))
            written += 1
          }
          return written
        })
        if (count !== outcomes.length) {
          return failure(storageFailure('save-package-metadata', `written rows (${count}) do not match input count (${outcomes.length})`))
        }
        return ok({ count })
      }
      catch (error) {
        if (error instanceof Error)
          return failure(storageFailure('save-package-metadata', errorMessage(error)))
        return failure(storageFailure('save-package-metadata', 'database write failed'))
      }
    },

    async saveDownloads(runId: string, records: readonly PackageDownloads[]): Promise<Result<StoredEntityCount, RequestFailure>> {
      try {
        const count = withTransaction(() => {
          const statement = database.prepare('INSERT INTO download_points_working (run_id, period_kind, package_name, downloads, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(run_id, period_kind, package_name) DO UPDATE SET downloads = excluded.downloads, start_date = excluded.start_date, end_date = excluded.end_date')
          let written = 0
          for (const record of records) {
            statement.run(runId, 'daily', record.daily.packageName, record.daily.downloads, record.daily.start, record.daily.end)
            statement.run(runId, 'monthly', record.monthly.packageName, record.monthly.downloads, record.monthly.start, record.monthly.end)
            written += 1
          }
          return written
        })
        if (count !== records.length) {
          return failure(storageFailure('save-downloads', `written rows (${count}) do not match input count (${records.length})`))
        }
        return ok({ count })
      }
      catch (error) {
        if (error instanceof Error)
          return failure(storageFailure('save-downloads', errorMessage(error)))
        return failure(storageFailure('save-downloads', 'database write failed'))
      }
    },

    async saveGitHubRepositories(runId: string, outcomes: readonly GitHubRepositoryOutcome[]): Promise<Result<StoredEntityCount, RequestFailure>> {
      try {
        const count = withTransaction(() => {
          const cacheStatement = database.prepare('INSERT INTO github_repository_cache (full_name, cache_json) VALUES (?, ?) ON CONFLICT(full_name) DO UPDATE SET cache_json = excluded.cache_json')
          const taskStatement = database.prepare('INSERT INTO sync_tasks (run_id, source, task_key, status, attempt, detail_json) VALUES (?, \'github\', ?, \'success\', ?, ?) ON CONFLICT(run_id, source, task_key) DO UPDATE SET status = excluded.status, attempt = excluded.attempt, detail_json = excluded.detail_json')
          let written = 0
          for (const outcome of outcomes) {
            if (outcome.nextCache.state === 'present')
              cacheStatement.run(outcome.nextCache.value.fullName.toLowerCase(), JSON.stringify(outcome.nextCache.value))
            taskStatement.run(runId, outcome.record.data.fullName.toLowerCase(), outcome.attempts, JSON.stringify({
              completedAt: options.nowIso(),
              responseStatus: outcome.record.validation === 'response-200' ? 200 : 304,
            }))
            written += 1
          }
          return written
        })
        if (count !== outcomes.length) {
          return failure(storageFailure('save-github-repositories', `written rows (${count}) do not match input count (${outcomes.length})`))
        }
        return ok({ count })
      }
      catch (error) {
        if (error instanceof Error)
          return failure(storageFailure('save-github-repositories', errorMessage(error)))
        return failure(storageFailure('save-github-repositories', 'database write failed'))
      }
    },

    async recordTaskSuccess(runId: string, source: ApiHost, taskKey: string, attempt: number, responseStatus: number): Promise<Result<StoredTaskSummary, RequestFailure>> {
      try {
        const detail = { completedAt: options.nowIso(), responseStatus }
        withTransaction(() => {
          database
            .prepare('INSERT INTO sync_tasks (run_id, source, task_key, status, attempt, detail_json) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(run_id, source, task_key) DO UPDATE SET status = excluded.status, attempt = excluded.attempt, detail_json = excluded.detail_json')
            .run(runId, source, taskKey, 'success', attempt, JSON.stringify(detail))
        })
        return ok({ source, taskKey, status: 'success' })
      }
      catch (error) {
        if (error instanceof Error)
          return failure(storageFailure('record-task-success', errorMessage(error)))
        return failure(storageFailure('record-task-success', 'database write failed'))
      }
    },

    async recordTaskFailure(runId: string, source: ApiHost, taskKey: string, attempt: number, failureInfo: RequestFailure): Promise<Result<StoredTaskSummary, RequestFailure>> {
      try {
        const detail = { failedAt: options.nowIso(), failure: failureInfo }
        withTransaction(() => {
          database
            .prepare('INSERT INTO sync_tasks (run_id, source, task_key, status, attempt, detail_json) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(run_id, source, task_key) DO UPDATE SET status = excluded.status, attempt = excluded.attempt, detail_json = excluded.detail_json')
            .run(runId, source, taskKey, 'failed', attempt, JSON.stringify(detail))
        })
        return ok({ source, taskKey, status: 'failed' })
      }
      catch (error) {
        if (error instanceof Error)
          return failure(storageFailure('record-task-failure', errorMessage(error)))
        return failure(storageFailure('record-task-failure', 'database write failed'))
      }
    },

    async savePublishedSnapshot(published: PublishedSnapshot, snapshot: CompletePluginSnapshot): Promise<Result<PublishedSnapshot, RequestFailure>> {
      try {
        withTransaction(() => {
          database
            .prepare('INSERT INTO published_snapshots (snapshot_id, snapshot_json) VALUES (?, ?) ON CONFLICT(snapshot_id) DO UPDATE SET snapshot_json = excluded.snapshot_json')
            .run(published.snapshotId, JSON.stringify({
              published,
              summary: {
                snapshotId: snapshot.snapshotId,
                startedAt: snapshot.startedAt,
                completedAt: snapshot.completedAt,
                entryCount: snapshot.entries.length,
                replicationStartSequence: snapshot.replicationStartSequence,
                replicationEndSequence: snapshot.replicationEndSequence,
                dailyPeriod: snapshot.dailyPeriod,
                monthlyPeriod: snapshot.monthlyPeriod,
              },
            }))
        })
        return ok(published)
      }
      catch (error) {
        if (error instanceof Error)
          return failure(storageFailure('save-published-snapshot', errorMessage(error)))
        return failure(storageFailure('save-published-snapshot', 'database write failed'))
      }
    },

    close(): void {
      database.close()
    },
  }

  return store
}
