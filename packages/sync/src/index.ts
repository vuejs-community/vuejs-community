import type { FetchError } from 'ofetch'
import { appendFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { setTimeout } from 'node:timers/promises'
import { loadDotenv } from 'c12'
import { createDatabase } from 'db0'
import nodeSqliteConnector from 'db0/connectors/node-sqlite'
import { ofetch } from 'ofetch'

const NPM_BULK_BATCH_SIZE = 120
const NPM_SCOPED_GAP_MS = 1500
const GITHUB_BATCH_SIZE = 50
const GITHUB_BATCH_GAP_MS = 500
const REQUEST_TIMEOUT_MS = 30_000
const SYNC_DEADLINE_MS = 45 * 60_000

interface Config {
  databasePath: string
  deadline: number
  token: string
}

interface NpmDownloadEntry {
  downloads: number
}

interface NpmRangeResponse {
  downloads: Array<{
    day: string
    downloads: number
  }>
  end: string
  package: string
  start: string
}

interface NpmMetric {
  packageName: string
  downloadsMonthly: number
  downloadsWeekly: number
}

interface GithubMetric {
  repository: string
  stars: number
}

interface GithubGraphqlResponse {
  data?: Record<string, {
    nameWithOwner: string
    stargazerCount: number
  } | null>
  errors?: Array<{
    message: string
    path?: Array<number | string>
    type?: string
  }>
}

interface ProjectSourceRow {
  github_repository: string | null
  npm_package: string | null
  source: string
}

interface SyncSummary {
  githubBatches: number
  githubFailed: number
  githubUpdated: number
  npmFailed: number
  npmRequests: number
  npmUpdated: number
}

class RetryableError extends Error {
  constructor(message: string, readonly retryAfterMs: number) {
    super(message)
  }
}

function getStatus(error: unknown): number | undefined {
  const fetchError = error as FetchError
  return fetchError.response?.status ?? fetchError.statusCode ?? fetchError.status
}

function getHeader(error: unknown, name: string): string | null {
  return (error as FetchError).response?.headers?.get(name) ?? null
}

function parseRetryAfter(value: string | null): number | null {
  if (!value)
    return null

  const seconds = Number(value)
  if (Number.isFinite(seconds))
    return Math.max(0, seconds * 1000)

  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? null : Math.max(0, timestamp - Date.now())
}

function getRetryDelay(error: unknown, attempt: number): number | null {
  if (error instanceof RetryableError)
    return error.retryAfterMs

  const status = getStatus(error)
  if (status === 404)
    return null

  const retryAfter = parseRetryAfter(getHeader(error, 'retry-after'))
  if (retryAfter !== null)
    return Math.max(retryAfter, 1000)

  if (status === 403) {
    if (getHeader(error, 'x-ratelimit-remaining') !== '0')
      return null

    const reset = Number(getHeader(error, 'x-ratelimit-reset')) * 1000
    return Number.isFinite(reset)
      ? Math.max(reset - Date.now() + 1000, 1000)
      : 60_000
  }

  if (status === 429)
    return Math.max(10_000 * attempt, 10_000)

  if (!status || status >= 500)
    return 1000 * 2 ** (attempt - 1)

  return null
}

async function withRetry<T>(
  label: string,
  request: () => Promise<T>,
  deadline: number,
  attempts = 3,
): Promise<T | null> {
  for (let attempt = 1; attempt <= attempts; attempt++) {
    if (Date.now() >= deadline) {
      console.warn(`[skip] ${label}: sync deadline reached`)
      return null
    }

    try {
      return await request()
    }
    catch (error) {
      const status = getStatus(error)
      if (status === 400 || status === 401)
        throw error

      const delay = getRetryDelay(error, attempt)
      if (delay === null || attempt === attempts) {
        console.warn(`[skip] ${label}: ${(error as Error).message}`)
        return null
      }

      if (Date.now() + delay >= deadline) {
        console.warn(`[skip] ${label}: retry would exceed the sync deadline`)
        return null
      }

      console.warn(`[retry] ${label} attempt ${attempt}/${attempts}, wait ${Math.ceil(delay / 1000)}s`)
      await setTimeout(delay)
    }
  }

  return null
}

function chunk<T>(items: T[], size: number): T[][] {
  return Array.from(
    { length: Math.ceil(items.length / size) },
    (_, index) => items.slice(index * size, (index + 1) * size),
  )
}

async function fetchNpmBulkPeriod(
  names: string[],
  period: 'month' | 'week',
  config: Config,
  summary: SyncSummary,
): Promise<Map<string, number>> {
  const packages = names.join(',')
  const response = await withRetry(
    `npm ${period} bulk (${names.length})`,
    () => {
      summary.npmRequests++
      return ofetch<NpmDownloadEntry | Record<string, NpmDownloadEntry | null>>(
        `https://api.npmjs.org/downloads/point/last-${period}/${packages}`,
        { retry: 0, timeout: REQUEST_TIMEOUT_MS },
      )
    },
    config.deadline,
  )

  const values = new Map<string, number>()
  if (!response)
    return values

  // npm returns a flat object rather than a package-name map when a batch has
  // exactly one item.
  if (names.length === 1 && 'downloads' in response && typeof response.downloads === 'number') {
    values.set(names[0]!, response.downloads)
    return values
  }

  for (const [name, entry] of Object.entries(response)) {
    if (entry && typeof entry !== 'number')
      values.set(name, entry.downloads)
  }
  return values
}

async function fetchUnscopedNpm(
  names: string[],
  config: Config,
  summary: SyncSummary,
): Promise<Map<string, NpmMetric>> {
  const metrics = new Map<string, NpmMetric>()

  for (const batch of chunk(names, NPM_BULK_BATCH_SIZE)) {
    const [monthly, weekly] = await Promise.all([
      fetchNpmBulkPeriod(batch, 'month', config, summary),
      fetchNpmBulkPeriod(batch, 'week', config, summary),
    ])

    for (const name of batch) {
      const downloadsMonthly = monthly.get(name)
      const downloadsWeekly = weekly.get(name)
      if (downloadsMonthly === undefined || downloadsWeekly === undefined) {
        summary.npmFailed++
        continue
      }

      metrics.set(name, { packageName: name, downloadsMonthly, downloadsWeekly })
    }
  }

  return metrics
}

async function fetchScopedNpm(
  names: string[],
  config: Config,
  summary: SyncSummary,
): Promise<Map<string, NpmMetric>> {
  const metrics = new Map<string, NpmMetric>()

  for (const name of names) {
    const response = await withRetry(
      `npm range ${name}`,
      () => {
        summary.npmRequests++
        return ofetch<NpmRangeResponse>(
          `https://api.npmjs.org/downloads/range/last-month/${encodeURIComponent(name)}`,
          { retry: 0, timeout: REQUEST_TIMEOUT_MS },
        )
      },
      config.deadline,
    )

    if (!response?.downloads.length) {
      summary.npmFailed++
      continue
    }

    const downloads = [...response.downloads].sort((left, right) => left.day.localeCompare(right.day))
    metrics.set(name, {
      packageName: name,
      downloadsMonthly: downloads.reduce((total, day) => total + day.downloads, 0),
      downloadsWeekly: downloads.slice(-7).reduce((total, day) => total + day.downloads, 0),
    })

    await setTimeout(NPM_SCOPED_GAP_MS)
  }

  return metrics
}

async function fetchNpmMetrics(
  names: string[],
  config: Config,
  summary: SyncSummary,
): Promise<Map<string, NpmMetric>> {
  const unique = [...new Set(names)].sort()
  const unscoped = unique.filter(name => !name.startsWith('@'))
  const scoped = unique.filter(name => name.startsWith('@'))

  console.log(`[npm] ${unscoped.length} unscoped packages, ${scoped.length} scoped packages`)
  // Finish the six or so bulk requests before starting the rate-sensitive
  // single-package lane. Running both lanes together causes an avoidable burst
  // of npm 429 responses at the start of the job.
  const unscopedMetrics = await fetchUnscopedNpm(unscoped, config, summary)
  const scopedMetrics = await fetchScopedNpm(scoped, config, summary)

  return new Map([...unscopedMetrics, ...scopedMetrics])
}

function createGithubQuery(repositories: string[]): string {
  const fields = repositories.map((repository, index) => {
    const [owner, name] = repository.split('/')
    return `repo${index}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) {
      nameWithOwner
      stargazerCount
    }`
  })

  return `query RepositoryStars {
    ${fields.join('\n')}
  }`
}

async function fetchGithubBatch(
  repositories: string[],
  config: Config,
): Promise<Map<string, number> | null> {
  return await withRetry(
    `github GraphQL batch (${repositories.length})`,
    async () => {
      const response = await ofetch.raw<GithubGraphqlResponse>('https://api.github.com/graphql', {
        method: 'POST',
        retry: 0,
        timeout: REQUEST_TIMEOUT_MS,
        headers: {
          'Authorization': `Bearer ${config.token}`,
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
        body: { query: createGithubQuery(repositories) },
      })
      const payload = response._data

      const rateLimited = payload?.errors?.some(error => error.type === 'RATE_LIMITED')
      if (rateLimited) {
        const remaining = response.headers.get('x-ratelimit-remaining')
        const reset = Number(response.headers.get('x-ratelimit-reset')) * 1000
        const delay = remaining === '0' && Number.isFinite(reset)
          ? Math.max(reset - Date.now() + 1000, 1000)
          : 60_000
        throw new RetryableError('GitHub GraphQL rate limited', delay)
      }

      const stars = new Map<string, number>()
      for (const [alias, repository] of repositories.entries()) {
        const data = payload?.data?.[`repo${alias}`]
        if (data)
          stars.set(repository, data.stargazerCount)
      }

      if (payload?.errors?.length)
        console.warn(`[github] batch returned ${payload.errors.length} partial errors`)

      return stars
    },
    config.deadline,
  )
}

async function fetchGithubMetrics(
  repositories: string[],
  config: Config,
  summary: SyncSummary,
): Promise<Map<string, GithubMetric>> {
  const metrics = new Map<string, GithubMetric>()
  const unique = [...new Set(repositories)]
    .filter(repository => repository.split('/').length === 2)
    .sort()
  const batches = chunk(unique, GITHUB_BATCH_SIZE)

  console.log(`[github] ${unique.length} repositories, ${batches.length} GraphQL batches`)
  for (const [index, batch] of batches.entries()) {
    summary.githubBatches++
    const stars = await fetchGithubBatch(batch, config)
    if (!stars) {
      summary.githubFailed += batch.length
      continue
    }

    for (const repository of batch) {
      const count = stars.get(repository)
      if (count === undefined) {
        summary.githubFailed++
        continue
      }
      metrics.set(repository, { repository, stars: count })
    }

    if ((index + 1) % 10 === 0 || index + 1 === batches.length)
      console.log(`[github] progress ${index + 1}/${batches.length} batches`)

    if (index + 1 < batches.length)
      await setTimeout(GITHUB_BATCH_GAP_MS)
  }

  return metrics
}

async function writeMetrics(
  databasePath: string,
  npmMetrics: Map<string, NpmMetric>,
  githubMetrics: Map<string, GithubMetric>,
): Promise<void> {
  const database = createDatabase(nodeSqliteConnector({ path: databasePath }))
  const updatedAt = new Date().toISOString()

  try {
    await database.exec('PRAGMA foreign_keys = ON; BEGIN IMMEDIATE;')

    try {
      const upsertNpm = database.prepare(`
        INSERT INTO npm_metrics (
          package_name,
          downloads_weekly,
          downloads_monthly,
          updated_at
        ) VALUES (?, ?, ?, ?)
        ON CONFLICT (package_name) DO UPDATE SET
          downloads_weekly = excluded.downloads_weekly,
          downloads_monthly = excluded.downloads_monthly,
          updated_at = excluded.updated_at
      `)
      const upsertGithub = database.prepare(`
        INSERT INTO github_metrics (repository, stars, updated_at)
        VALUES (?, ?, ?)
        ON CONFLICT (repository) DO UPDATE SET
          stars = excluded.stars,
          updated_at = excluded.updated_at
      `)

      for (const metric of npmMetrics.values()) {
        await upsertNpm.run(
          metric.packageName,
          metric.downloadsWeekly,
          metric.downloadsMonthly,
          updatedAt,
        )
      }

      for (const metric of githubMetrics.values())
        await upsertGithub.run(metric.repository, metric.stars, updatedAt)

      await database.exec('COMMIT')
    }
    catch (error) {
      await database.exec('ROLLBACK')
      throw error
    }

    const integrity = await database.prepare('PRAGMA integrity_check').get() as Record<string, string>
    if (Object.values(integrity)[0] !== 'ok')
      throw new Error(`SQLite integrity check failed: ${JSON.stringify(integrity)}`)
  }
  finally {
    await database.dispose()
  }
}

async function writeGithubSummary(summary: SyncSummary, elapsedMs: number): Promise<void> {
  const path = process.env.GITHUB_STEP_SUMMARY
  if (!path)
    return

  await appendFile(path, [
    '## Metrics sync',
    '',
    `- Duration: ${Math.round(elapsedMs / 1000)} seconds`,
    `- npm requests: ${summary.npmRequests}`,
    `- npm metrics updated: ${summary.npmUpdated}`,
    `- npm metrics preserved after failures: ${summary.npmFailed}`,
    `- GitHub GraphQL batches: ${summary.githubBatches}`,
    `- GitHub metrics updated: ${summary.githubUpdated}`,
    `- GitHub metrics preserved after failures: ${summary.githubFailed}`,
    '',
  ].join('\n'))
}

async function main(config: Config): Promise<void> {
  const startedAt = Date.now()
  const summary: SyncSummary = {
    githubBatches: 0,
    githubFailed: 0,
    githubUpdated: 0,
    npmFailed: 0,
    npmRequests: 0,
    npmUpdated: 0,
  }
  const database = createDatabase(nodeSqliteConnector({ path: config.databasePath }))

  let sources: ProjectSourceRow[]
  try {
    sources = await database.prepare(`
      SELECT DISTINCT source, npm_package, github_repository
      FROM projects
    `).all() as ProjectSourceRow[]
  }
  finally {
    await database.dispose()
  }

  const npmPackages = sources
    .filter(source => source.source !== 'data-plugins')
    .map(source => source.npm_package)
    .filter((value): value is string => Boolean(value))
  const githubRepositories = sources
    .map(source => source.github_repository)
    .filter((value): value is string => Boolean(value))

  const [npmMetrics, githubMetrics] = await Promise.all([
    fetchNpmMetrics(npmPackages, config, summary),
    fetchGithubMetrics(githubRepositories, config, summary),
  ])

  if (npmPackages.length > 0 && npmMetrics.size === 0)
    throw new Error('npm metrics sync returned no usable results; preserved database was not modified.')
  if (githubRepositories.length > 0 && githubMetrics.size === 0)
    throw new Error('GitHub metrics sync returned no usable results; preserved database was not modified.')

  summary.npmUpdated = npmMetrics.size
  summary.githubUpdated = githubMetrics.size
  await writeMetrics(config.databasePath, npmMetrics, githubMetrics)
  await writeGithubSummary(summary, Date.now() - startedAt)

  console.log(`[sync] npm updated=${summary.npmUpdated}, preserved=${summary.npmFailed}, requests=${summary.npmRequests}`)
  console.log(`[sync] github updated=${summary.githubUpdated}, preserved=${summary.githubFailed}, batches=${summary.githubBatches}`)
  console.log(`[sync] completed in ${Math.round((Date.now() - startedAt) / 1000)}s`)
}

async function run(): Promise<void> {
  const env = await loadDotenv({
    cwd: resolve(import.meta.dirname, '../../../'),
  })
  const token = env.GENERATE_TOKEN ?? process.env.GENERATE_TOKEN
  if (!token)
    throw new Error('GENERATE_TOKEN is required to sync GitHub metrics.')

  await main({
    databasePath: resolve(import.meta.dirname, '../../../server/assets/index.db'),
    deadline: Date.now() + SYNC_DEADLINE_MS,
    token,
  })
}

run().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
