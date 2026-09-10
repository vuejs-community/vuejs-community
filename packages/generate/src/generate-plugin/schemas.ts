// 外部 JSON 的运行时 schema 与解码函数。
// schema 失败产生 RequestFailure.kind === 'schema'，并阻止快照发布。

import type { DownloadPeriod, DownloadPoint, GitHubRepositoryData, NpmRepository, PackageMetadata, Presence, ReplicationChange, ReplicationChangesPage, ReplicationIndexRow, ReplicationInfo, ReplicationPage, RequestFailure, Result } from './contracts'
import { z } from 'zod'
import {
  absent,

  failure,

  ok,

  present,

} from './contracts'

// ---------------------------------------------------------------------------
// 基础规则
// ---------------------------------------------------------------------------

const finiteNumberSchema = z.number().finite()
const nonNegativeIntegerSchema = z.number().int().nonnegative()

function isValidCalendarDate(value: string): boolean {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match)
    return false
  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  if (!Number.isSafeInteger(year) || !Number.isSafeInteger(month) || !Number.isSafeInteger(day))
    return false
  if (month < 1 || month > 12 || day < 1 || day > 31)
    return false
  const timestamp = Date.UTC(year, month - 1, day)
  const roundTrip = new Date(timestamp)
  return roundTrip.getUTCFullYear() === year
    && roundTrip.getUTCMonth() === month - 1
    && roundTrip.getUTCDate() === day
}

const isoDateStringSchema = z.string().refine(isValidCalendarDate, { message: 'expected a valid YYYY-MM-DD calendar date' })

const responseHashSchema = z.string().regex(/^[0-9a-f]{64}$/, { message: 'expected a lowercase sha-256 hex digest' })

function collectIssues(error: z.ZodError): readonly string[] {
  return error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`)
}

function schemaFailure(error: z.ZodError): RequestFailure {
  return { kind: 'schema', issues: collectIssues(error) }
}

function decodeBody<T>(schema: z.ZodType<T>, body: string): Result<T, RequestFailure> {
  const parsed = schema.safeParse(JSON.parse(body))
  if (!parsed.success)
    return failure(schemaFailure(parsed.error))
  return ok(parsed.data)
}

// ---------------------------------------------------------------------------
// 序列化形态的 Presence（用于存储往返与快照文件校验）
// ---------------------------------------------------------------------------

function presenceSchema<T>(inner: z.ZodType<T>): z.ZodType<Presence<T>> {
  return z.union([
    z.object({ state: z.literal('present'), value: inner }),
    z.object({ state: z.literal('absent') }),
  ])
}

const presenceStringSchema = presenceSchema(z.string())
const presenceStringArraySchema = presenceSchema(z.array(z.string()))
const presenceNumberSchema = presenceSchema(finiteNumberSchema)

// ---------------------------------------------------------------------------
// Replication
// ---------------------------------------------------------------------------

const replicationInfoWireSchema = z.object({
  db_name: z.string().min(1),
  engine: z.string().min(1),
  doc_count: nonNegativeIntegerSchema,
  update_seq: nonNegativeIntegerSchema,
})

const replicationPageWireSchema = z.object({
  total_rows: nonNegativeIntegerSchema,
  offset: nonNegativeIntegerSchema,
  rows: z.array(z.object({
    id: z.string().min(1),
    key: z.string().min(1),
    value: z.object({
      rev: z.string().min(1),
    }),
  })),
})

const replicationChangesPageWireSchema = z.object({
  last_seq: nonNegativeIntegerSchema,
  results: z.array(z.object({
    seq: nonNegativeIntegerSchema,
    id: z.string().min(1),
    changes: z.array(z.object({ rev: z.string().min(1) })).min(1),
    deleted: z.optional(z.boolean()),
  })),
})

export function decodeReplicationInfo(body: string): Result<ReplicationInfo, RequestFailure> {
  const decoded = decodeBody(replicationInfoWireSchema, body)
  if (!decoded.ok)
    return decoded
  return ok({
    databaseName: decoded.value.db_name,
    engine: decoded.value.engine,
    documentCount: decoded.value.doc_count,
    updateSequence: decoded.value.update_seq,
  })
}

export function decodeReplicationPage(body: string): Result<ReplicationPage, RequestFailure> {
  const decoded = decodeBody(replicationPageWireSchema, body)
  if (!decoded.ok)
    return decoded
  const rows: ReplicationIndexRow[] = decoded.value.rows.map(row => ({
    packageName: row.id,
    key: row.key,
    revision: row.value.rev,
  }))
  return ok({
    totalRows: decoded.value.total_rows,
    offset: decoded.value.offset,
    rows,
  })
}

export function decodeReplicationChangesPage(body: string): Result<ReplicationChangesPage, RequestFailure> {
  const decoded = decodeBody(replicationChangesPageWireSchema, body)
  if (!decoded.ok)
    return decoded
  const changes: ReplicationChange[] = []
  for (const row of decoded.value.results) {
    const firstRevision = row.changes[0]?.rev
    if (typeof firstRevision !== 'string') {
      return failure({
        kind: 'schema',
        issues: [`changes[0].rev is missing for replication change "${row.id}"`],
      })
    }
    changes.push({
      sequence: row.seq,
      packageName: row.id,
      revision: firstRevision,
      deleted: row.deleted === true,
    })
  }
  return ok({
    lastSequence: decoded.value.last_seq,
    changes,
  })
}

// ---------------------------------------------------------------------------
// Package metadata
// ---------------------------------------------------------------------------

const npmRepositoryWireSchema = z.union([
  z.string().min(1),
  z.object({
    url: z.string().min(1),
    type: z.optional(z.string()),
    directory: z.optional(z.string()),
  }),
])

const packageMetadataWireSchema = z.object({
  name: z.string().min(1),
  version: z.string().min(1),
  description: z.optional(z.string()),
  keywords: z.optional(z.array(z.string())),
  repository: z.optional(npmRepositoryWireSchema),
  homepage: z.optional(z.string()),
  bugs: z.optional(z.object({
    url: z.optional(z.string().min(1)),
  })),
  deprecated: z.optional(z.string()),
})

export const npmRepositorySchema = z.discriminatedUnion('kind', [
  z.object({
    kind: z.literal('string'),
    value: z.string().min(1),
  }),
  z.object({
    kind: z.literal('object'),
    url: z.string().min(1),
    type: presenceStringSchema,
    directory: presenceStringSchema,
  }),
])

export const packageMetadataSchema = z.object({
  name: z.string().min(1),
  version: z.string().min(1),
  description: presenceStringSchema,
  keywords: presenceStringArraySchema,
  repository: presenceSchema(npmRepositorySchema),
  homepage: presenceStringSchema,
  bugsUrl: presenceStringSchema,
  deprecated: presenceStringSchema,
})

type NpmRepositoryWire = z.infer<typeof packageMetadataWireSchema>['repository']

function buildNpmRepository(source: NpmRepositoryWire): Presence<NpmRepository> {
  if (typeof source === 'string')
    return present({ kind: 'string', value: source })
  if (typeof source === 'object') {
    return present({
      kind: 'object',
      url: source.url,
      type: typeof source.type === 'string' ? present(source.type) : absent(),
      directory: typeof source.directory === 'string' ? present(source.directory) : absent(),
    })
  }
  return absent()
}

type PackageMetadataWire = z.infer<typeof packageMetadataWireSchema>

function buildPackageMetadata(wire: PackageMetadataWire): PackageMetadata {
  return {
    name: wire.name,
    version: wire.version,
    description: typeof wire.description === 'string' ? present(wire.description) : absent(),
    keywords: Array.isArray(wire.keywords) ? present([...wire.keywords]) : absent(),
    repository: buildNpmRepository(wire.repository),
    homepage: typeof wire.homepage === 'string' ? present(wire.homepage) : absent(),
    bugsUrl: resolveBugsUrl(wire.bugs),
    deprecated: typeof wire.deprecated === 'string' ? present(wire.deprecated) : absent(),
  }
}

function resolveBugsUrl(bugs: PackageMetadataWire['bugs']): Presence<string> {
  if (typeof bugs === 'object' && typeof bugs.url === 'string')
    return present(bugs.url)
  return absent()
}

export function decodePackageMetadata(
  body: string,
  expectedPackageName: string,
): Result<PackageMetadata, RequestFailure> {
  const parsed = packageMetadataWireSchema.safeParse(JSON.parse(body))
  if (!parsed.success)
    return failure(schemaFailure(parsed.error))
  const metadata = buildPackageMetadata(parsed.data)
  if (metadata.name !== expectedPackageName) {
    return failure({
      kind: 'invariant',
      message: `npm metadata entity "${metadata.name}" does not match the requested package "${expectedPackageName}"`,
    })
  }
  const validated = packageMetadataSchema.safeParse(metadata)
  if (!validated.success)
    return failure(schemaFailure(validated.error))
  return ok(validated.data)
}

// 存储往返：PackageMetadataCache 的序列化校验。
export const packageMetadataCacheSchema = z.object({
  packageName: z.string().min(1),
  requestUrl: z.string().min(1),
  lastModified: presenceStringSchema,
  responseHash: responseHashSchema,
  metadata: packageMetadataSchema,
})

// ---------------------------------------------------------------------------
// Downloads
// ---------------------------------------------------------------------------

const downloadPointWireSchema = z.object({
  downloads: nonNegativeIntegerSchema,
  package: z.string().min(1),
  start: isoDateStringSchema,
  end: isoDateStringSchema,
})

function buildDownloadPoint(wire: z.infer<typeof downloadPointWireSchema>): DownloadPoint {
  return {
    packageName: wire.package,
    downloads: wire.downloads,
    start: wire.start,
    end: wire.end,
  }
}

// 周期锚定请求：只校验实体形状与包名，不校验统计周期。
export function decodeAnchorDownloadPoint(
  body: string,
  expectedPackageName: string,
): Result<DownloadPoint, RequestFailure> {
  const decoded = decodeBody(downloadPointWireSchema, body)
  if (!decoded.ok)
    return decoded
  if (decoded.value.package !== expectedPackageName) {
    return failure({
      kind: 'invariant',
      message: `npm downloads anchor entity "${decoded.value.package}" does not match the requested package "${expectedPackageName}"`,
    })
  }
  return ok(buildDownloadPoint(decoded.value))
}

function rejectPeriodMismatch(
  point: DownloadPoint,
  expectedPeriod: DownloadPeriod,
): Result<boolean, RequestFailure> {
  if (point.start !== expectedPeriod.start || point.end !== expectedPeriod.end) {
    return failure({
      kind: 'invariant',
      message: `npm downloads period for "${point.packageName}" (${point.start}..${point.end}) does not match the anchored period (${expectedPeriod.start}..${expectedPeriod.end})`,
    })
  }
  return ok(true)
}

export function decodeDownloadPoint(
  body: string,
  expectedPackageName: string,
  expectedPeriod: DownloadPeriod,
): Result<DownloadPoint, RequestFailure> {
  const decoded = decodeBody(downloadPointWireSchema, body)
  if (!decoded.ok)
    return decoded
  if (decoded.value.package !== expectedPackageName) {
    return failure({
      kind: 'invariant',
      message: `npm downloads entity "${decoded.value.package}" does not match the requested package "${expectedPackageName}"`,
    })
  }
  const point = buildDownloadPoint(decoded.value)
  const periodCheck = rejectPeriodMismatch(point, expectedPeriod)
  if (!periodCheck.ok)
    return periodCheck
  return ok(point)
}

export function decodeDownloadBulkResponse(
  body: string,
  expectedPackageNames: readonly string[],
  expectedPeriod: DownloadPeriod,
): Result<readonly DownloadPoint[], RequestFailure> {
  const parsed = z.record(z.string(), downloadPointWireSchema).safeParse(JSON.parse(body))
  if (!parsed.success)
    return failure(schemaFailure(parsed.error))

  const responseKeys = Object.keys(parsed.data).sort()
  const expectedKeys = [...expectedPackageNames].sort()
  const responseKeySet = responseKeys.join('\u0000')
  const expectedKeySet = expectedKeys.join('\u0000')
  if (responseKeySet !== expectedKeySet) {
    return failure({
      kind: 'invariant',
      message: `npm downloads bulk response key set does not match the requested set: requested ${expectedKeys.length} entries, received ${responseKeys.length} entries`,
    })
  }

  const points: DownloadPoint[] = []
  for (const packageName of expectedPackageNames) {
    const wire = parsed.data[packageName]
    if (typeof wire !== 'object') {
      return failure({
        kind: 'invariant',
        message: `npm downloads bulk response is missing the key "${packageName}" despite a matching key set`,
      })
    }
    if (wire.package !== packageName) {
      return failure({
        kind: 'invariant',
        message: `npm downloads bulk entry key "${packageName}" carries entity "${wire.package}"`,
      })
    }
    const point = buildDownloadPoint(wire)
    const periodCheck = rejectPeriodMismatch(point, expectedPeriod)
    if (!periodCheck.ok)
      return periodCheck
    points.push(point)
  }
  return ok(points)
}

// ---------------------------------------------------------------------------
// GitHub repository
// ---------------------------------------------------------------------------

const githubRepositoryWireSchema = z.object({
  full_name: z.string().min(1),
  html_url: z.string().min(1),
  stargazers_count: nonNegativeIntegerSchema,
  archived: z.boolean(),
  disabled: z.boolean(),
})

export const githubRepositoryDataSchema = z.object({
  fullName: z.string().min(1),
  htmlUrl: z.string().min(1),
  stars: nonNegativeIntegerSchema,
  archived: z.boolean(),
  disabled: z.boolean(),
})

export const githubRepositoryCacheSchema = z.object({
  fullName: z.string().min(1),
  etag: z.string().min(1),
  responseHash: responseHashSchema,
  data: githubRepositoryDataSchema,
})

export function decodeGitHubRepository(
  body: string,
  expectedFullName: string,
): Result<GitHubRepositoryData, RequestFailure> {
  const decoded = decodeBody(githubRepositoryWireSchema, body)
  if (!decoded.ok)
    return decoded
  if (decoded.value.full_name.toLowerCase() !== expectedFullName.toLowerCase()) {
    return failure({
      kind: 'invariant',
      message: `github repository "${decoded.value.full_name}" does not match the requested repository "${expectedFullName}"`,
    })
  }
  return ok({
    fullName: decoded.value.full_name,
    htmlUrl: decoded.value.html_url,
    stars: decoded.value.stargazers_count,
    archived: decoded.value.archived,
    disabled: decoded.value.disabled,
  })
}

// ---------------------------------------------------------------------------
// 同步 Run / Task / RequestFailure（存储往返）
// ---------------------------------------------------------------------------

export const replicationBoundsSchema = z.object({
  startSequence: nonNegativeIntegerSchema,
  endSequence: nonNegativeIntegerSchema,
})

const presenceReplicationBoundsSchema = presenceSchema(replicationBoundsSchema)

const activeSyncStageSchema = z.enum(['replication', 'metadata', 'downloads', 'github', 'validation', 'publishing'])

const isoUtcTimestampSchema = z.string().refine(
  value => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/.test(value) && Number.isFinite(Date.parse(value)),
  { message: 'expected an ISO 8601 UTC timestamp' },
)

const syncRunIdentityFields = {
  runId: z.string().min(1),
  businessDate: isoDateStringSchema,
  startedAt: isoUtcTimestampSchema,
  updatedAt: isoUtcTimestampSchema,
}

export const syncRunSchema = z.discriminatedUnion('status', [
  z.object({
    ...syncRunIdentityFields,
    status: z.literal('running'),
    stage: activeSyncStageSchema,
    replication: presenceReplicationBoundsSchema,
  }),
  z.object({
    ...syncRunIdentityFields,
    status: z.literal('complete'),
    completedAt: isoUtcTimestampSchema,
    replication: replicationBoundsSchema,
  }),
  z.object({
    ...syncRunIdentityFields,
    status: z.literal('failed'),
    failedAt: isoUtcTimestampSchema,
    failedStage: activeSyncStageSchema,
    replication: presenceReplicationBoundsSchema,
    failureMessage: z.string().min(1),
  }),
])

export const requestFailureSchema = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('network'), message: z.string() }),
  z.object({ kind: z.literal('timeout'), timeoutMs: nonNegativeIntegerSchema }),
  z.object({
    kind: z.literal('http'),
    status: nonNegativeIntegerSchema,
    body: z.string(),
    retryAfterMs: presenceNumberSchema,
    rateLimitRemaining: presenceNumberSchema,
    rateLimitResetAt: presenceNumberSchema,
  }),
  z.object({ kind: z.literal('schema'), issues: z.array(z.string()) }),
  z.object({ kind: z.literal('invariant'), message: z.string() }),
  z.object({ kind: z.literal('storage'), operation: z.string().min(1), message: z.string() }),
  z.object({ kind: z.literal('publish'), operation: z.string().min(1), message: z.string() }),
])

export const syncTaskStatusSchema = z.enum(['pending', 'running', 'retry-wait', 'success', 'failed'])

const syncTaskDetailSchema = z.object({
  completedAt: z.optional(isoUtcTimestampSchema),
  responseStatus: z.optional(nonNegativeIntegerSchema),
  failure: z.optional(requestFailureSchema),
})

export const storedTaskSummarySchema = z.object({
  source: z.enum(['replication', 'npm-registry', 'npm-downloads', 'github']),
  taskKey: z.string().min(1),
  status: syncTaskStatusSchema,
  detail: syncTaskDetailSchema,
})

export type StoredTaskDetail = z.infer<typeof storedTaskSummarySchema>

// ---------------------------------------------------------------------------
// 快照文件与 manifest
// ---------------------------------------------------------------------------

const downloadPeriodSchema = z.object({
  kind: z.enum(['daily', 'monthly']),
  start: isoDateStringSchema,
  end: isoDateStringSchema,
  apiPeriod: z.string().min(1),
})

export const snapshotEntryFileSchema = z.object({
  packageName: z.string().min(1),
  type: z.enum(['vite-plugin', 'rollup-plugin', 'rolldown-plugin', 'unplugin']),
  directory: z.enum(['vite', 'rollup', 'rolldown', 'unplugin']),
  icon: z.string().min(1),
  version: z.string().min(1),
  description: z.optional(z.string()),
  keywords: z.optional(z.array(z.string())),
  repository: z.optional(z.string().min(1)),
  homepage: z.optional(z.string()),
  deprecated: z.optional(z.string()),
  daily: z.object({
    downloads: nonNegativeIntegerSchema,
    start: isoDateStringSchema,
    end: isoDateStringSchema,
  }),
  monthly: z.object({
    downloads: nonNegativeIntegerSchema,
    start: isoDateStringSchema,
    end: isoDateStringSchema,
  }),
  github: z.optional(githubRepositoryDataSchema),
})

export const snapshotManifestSchema = z.object({
  snapshotId: z.string().min(1),
  status: z.literal('complete'),
  startedAt: isoUtcTimestampSchema,
  completedAt: isoUtcTimestampSchema,
  entryCount: nonNegativeIntegerSchema,
  replicationStartSequence: nonNegativeIntegerSchema,
  replicationEndSequence: nonNegativeIntegerSchema,
  dailyPeriod: downloadPeriodSchema,
  monthlyPeriod: downloadPeriodSchema,
})

export const DOWNLOAD_BATCH_MAX_SIZE = 100
export const DOWNLOAD_BATCH_MAX_URL_LENGTH = 7000
