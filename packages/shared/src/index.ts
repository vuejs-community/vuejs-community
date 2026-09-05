import type { CommunityProject } from '@vuejs-community/schema'
import type { GithubInfo, PackageTimeGranularity } from './types.ts'
import { existsSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { ofetch } from 'ofetch'

/**
 * npm rejects scoped packages in bulk lookups, and rate-limits individual downloads
 * requests hard (429 storms at even modest concurrency), so scoped names are fetched
 * over a single serialized lane with a pause between packages.
 */
const BULK_BATCH_SIZE = 100
const BULK_CONCURRENCY = 4
const SCOPED_REQUEST_GAP_MS = 600
const STARS_CONCURRENCY = 8

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/** ofetch attaches the response status to every FetchError as `statusCode`. */
interface StatusedError {
  statusCode?: number
}

/**
 * A failure is only worth retrying when it may succeed later: network errors (no
 * status), 429 and 5xx are transient; other 4xx are permanent.
 */
function isTransientError(error: StatusedError | null): boolean {
  const status = error?.statusCode ?? 0
  return status === 0 || status === 429 || status >= 500
}

interface RetryOptions {
  attempts?: number
  initialBackoffMs?: number
}

/**
 * Runs `request` with bounded retries; only transient failures are retried. Returns
 * null when the request fails permanently or keeps failing after all attempts.
 */
export async function fetchWithRetry<T>(request: () => Promise<T>, options: RetryOptions = {}): Promise<T | null> {
  const attempts = options.attempts ?? 3
  const initialBackoffMs = options.initialBackoffMs ?? 500

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await request()
    }
    catch (error) {
      if (attempt >= attempts || !isTransientError(error as StatusedError | null))
        return null
      await sleep(initialBackoffMs * 2 ** (attempt - 1))
    }
  }
  return null
}

async function mapWithConcurrency<T, R>(items: readonly T[], concurrency: number, worker: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = []
  let next = 0
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (next < items.length) {
      const index = next++
      results[index] = await worker(items[index]!)
    }
  }))
  return results
}

/** npm's downloads point endpoint answers a single package name with this flat shape. */
interface NpmDownloadEntry {
  downloads: number
}

/**
 * A bulk lookup (comma-separated names) answers with this map. npm fills null for
 * packages it has no data for — captured live:
 * `{"vue":{...},"vue-this-package-does-not-exist":null}` — while `downloads` itself
 * is always a number per the official docs.
 */
type NpmBulkDownloads = Record<string, NpmDownloadEntry>

/** Single-package download count. Returns 0 when the lookup fails. */
export async function getNpmPackageDownload(name: string, type: PackageTimeGranularity): Promise<number> {
  return await fetchNpmDownload(name, type) ?? 0
}

async function fetchNpmDownload(name: string, type: PackageTimeGranularity): Promise<number> {
  const result = await fetchWithRetry(
    () => ofetch<NpmDownloadEntry>(`https://api.npmjs.org/downloads/point/last-${type}/${name}`, { retry: 0 }),
    { initialBackoffMs: 5000 },
  )
  return result?.downloads ?? 0
}

export interface NpmDownloadsResult {
  monthly: Map<string, number>
  weekly: Map<string, number>
}

/**
 * Fetch weekly and monthly download counts for many packages in one pass.
 *
 * Unscoped names go through npm's bulk endpoint in batches of 2-100 (the documented
 * cap is 128). A one-name URL gets the flat shape instead of the map, so a lone
 * leftover is fetched through the serialized single lane. Scoped names always use
 * the serialized single lane, since the downloads API throttles individual requests
 * aggressively (429 storms at even modest concurrency).
 *
 * Lookups without usable data — failed requests, npm's null bulk entries — are
 * absent from the maps, so callers can fall back to previously stored values instead
 * of treating the gap as zero.
 */
export async function getNpmDownloads(names: string[]): Promise<NpmDownloadsResult> {
  const unique = [...new Set(names)].filter(Boolean)
  const monthly = new Map<string, number>()
  const weekly = new Map<string, number>()

  const unscoped = unique.filter(name => !name.startsWith('@'))
  const singles = unique.filter(name => name.startsWith('@'))

  const bulkBatches: string[][] = []
  for (let start = 0; start < unscoped.length; start += BULK_BATCH_SIZE)
    bulkBatches.push(unscoped.slice(start, start + BULK_BATCH_SIZE))
  if (bulkBatches.at(-1)?.length === 1)
    singles.push(...bulkBatches.pop()!)

  const store = (type: PackageTimeGranularity, name: string, value: number) => {
    ;(type === 'month' ? monthly : weekly).set(name, value)
  }

  const bulkLane = Promise.all((['month', 'week'] as const).map(type =>
    mapWithConcurrency(bulkBatches, BULK_CONCURRENCY, async (batch) => {
      const result = await fetchWithRetry(
        () => ofetch<NpmBulkDownloads>(`https://api.npmjs.org/downloads/point/last-${type}/${batch.join(',')}`, { retry: 0 }),
        { initialBackoffMs: 2000 },
      )
      if (!result)
        return
      for (const [name, entry] of Object.entries(result)) {
        if (entry)
          store(type, name, entry.downloads)
      }
    }),
  ))

  const singleLane = (async () => {
    for (const name of singles) {
      const [monthValue, weekValue] = await Promise.all([
        fetchNpmDownload(name, 'month'),
        fetchNpmDownload(name, 'week'),
      ])
      if (monthValue !== null)
        store('month', name, monthValue)
      if (weekValue !== null)
        store('week', name, weekValue)
      await sleep(SCOPED_REQUEST_GAP_MS)
    }
  })()

  await Promise.all([bulkLane, singleLane])
  return { monthly, weekly }
}

export async function getGithubStar(repo: string): Promise<number> {
  const result = await fetchWithRetry(() => ofetch<GithubInfo>(`https://ungh.cc/repos/${repo}`, { retry: 0 }))
  return result?.repo?.stars ?? 0
}

/** Fetch stars for many repos with bounded concurrency. Repos that fail are recorded as 0. */
export async function getGithubStars(repos: string[]): Promise<Map<string, number>> {
  const unique = [...new Set(repos)].filter(Boolean)
  const stars = new Map<string, number>()

  await mapWithConcurrency(unique, STARS_CONCURRENCY, async (repo) => {
    stars.set(repo, await getGithubStar(repo))
  })

  return stars
}

/** JSON.stringify with nested keys sorted, so two objects differing only in key order compare equal. */
export function stableStringify(value: CommunityProject): string {
  return JSON.stringify(value, (_key, item) => {
    if (typeof item === 'object' && !Array.isArray(item))
      return Object.fromEntries(Object.entries(item).sort(([left], [right]) => left.localeCompare(right)))
    return item
  })
}

/** Render the canonical source of a `defineProjectMeta` data file. */
export function renderProjectMetaSource(project: CommunityProject): string {
  return `import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta(${JSON.stringify(project, null, 2)})
`
}

/** Import a project meta data file and return its default export. Throws when the file cannot be imported. */
export async function readProjectMeta(filePath: string): Promise<CommunityProject> {
  const imported = await import(pathToFileURL(filePath).href)
  return imported.default as CommunityProject
}

export type ProjectMetaWriteResult = 'created' | 'updated' | 'unchanged'

/**
 * Write a project meta data file only when its content would actually change.
 * Existing files may have been reformatted by eslint, so equality is decided on the
 * imported project object instead of raw text.
 */
export async function writeProjectMetaIfChanged(filePath: string, project: CommunityProject): Promise<ProjectMetaWriteResult> {
  if (!existsSync(filePath)) {
    await writeFile(filePath, renderProjectMetaSource(project), 'utf-8')
    return 'created'
  }

  if (stableStringify(await readProjectMeta(filePath)) === stableStringify(project))
    return 'unchanged'

  await writeFile(filePath, renderProjectMetaSource(project), 'utf-8')
  return 'updated'
}
