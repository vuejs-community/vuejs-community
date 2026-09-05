import type { GithubInfo, PackageTimeGranularity } from './types.ts'
import { ofetch } from 'ofetch'

/** Total attempts per request (1 initial + retries). Only transient failures retry. */
const MAX_ATTEMPTS = 3
const INITIAL_BACKOFF_MS = 500

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

/** A failure is only worth retrying when it may succeed later: network errors, 429 and 5xx are transient; 4xx is permanent. */
function isTransientError(error: unknown): boolean {
  const status = (error as { statusCode?: number } | null)?.statusCode
    ?? (error as { status?: number } | null)?.status
  return status === undefined || status === 429 || (typeof status === 'number' && status >= 500)
}

interface RetryOptions {
  attempts?: number
  initialBackoffMs?: number
}

/** Returns undefined on permanent failure or after exhausting attempts. */
async function fetchWithRetry<T>(request: () => Promise<T>, options: RetryOptions = {}): Promise<T | undefined> {
  const attempts = options.attempts ?? MAX_ATTEMPTS
  const initialBackoffMs = options.initialBackoffMs ?? INITIAL_BACKOFF_MS
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await request()
    }
    catch (error) {
      if (attempt >= attempts || !isTransientError(error))
        return undefined
      await sleep(initialBackoffMs * 2 ** (attempt - 1))
    }
  }
  return undefined
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

interface BulkDownloadEntry {
  downloads: number | null
}

/** Single-package download count. Returns 0 when the lookup fails. */
export async function getNpmPackageDownload(name: string, type: PackageTimeGranularity): Promise<number> {
  return await fetchNpmDownload(name, type) ?? 0
}

async function fetchNpmDownload(name: string, type: PackageTimeGranularity): Promise<number | undefined> {
  const result = await fetchWithRetry(async () => {
    const data = await ofetch<{ downloads: number | null }>(`https://api.npmjs.org/downloads/point/last-${type}/${name}`, { retry: 0 })
    if (!data || (data.downloads !== null && typeof data.downloads !== 'number'))
      throw new Error(`invalid downloads payload for ${name}`)
    return data
  }, { initialBackoffMs: 5000 })
  return typeof result?.downloads === 'number' && Number.isFinite(result.downloads) ? result.downloads : undefined
}

export interface NpmDownloadsResult {
  monthly: Map<string, number>
  weekly: Map<string, number>
}

/**
 * Fetch weekly and monthly download counts for many packages in one pass.
 *
 * Unscoped names go through npm's bulk endpoint (100 per request). Scoped names are
 * fetched individually over one serialized lane with a pause between packages, since
 * the downloads API throttles individual requests aggressively. Failed lookups are
 * absent from the maps — callers should fall back to previously stored values instead
 * of treating absence as zero.
 */
export async function getNpmDownloads(names: string[]): Promise<NpmDownloadsResult> {
  const unique = [...new Set(names)].filter(Boolean)
  const monthly = new Map<string, number>()
  const weekly = new Map<string, number>()
  if (unique.length === 0)
    return { monthly, weekly }

  const unscoped = unique.filter(name => !name.startsWith('@'))
  const scoped = unique.filter(name => name.startsWith('@'))

  const bulkBatches: Array<{ batch: string[], type: PackageTimeGranularity }> = []
  for (const type of ['month', 'week'] as const) {
    for (let start = 0; start < unscoped.length; start += BULK_BATCH_SIZE)
      bulkBatches.push({ batch: unscoped.slice(start, start + BULK_BATCH_SIZE), type })
  }

  const store = (type: PackageTimeGranularity, name: string, value: number) => {
    ;(type === 'month' ? monthly : weekly).set(name, value)
  }

  await Promise.all([
    mapWithConcurrency(bulkBatches, BULK_CONCURRENCY, async ({ batch, type }) => {
      const result = await fetchWithRetry(async () => {
        const data = await ofetch<Record<string, BulkDownloadEntry> | BulkDownloadEntry>(`https://api.npmjs.org/downloads/point/last-${type}/${batch.join(',')}`, { retry: 0 })
        if (!data || typeof data !== 'object')
          throw new Error(`invalid bulk downloads payload for ${batch.length} package(s)`)
        return data
      }, { initialBackoffMs: 2000 })
      if (!result)
        return

      // A comma-separated URL is answered with a `{ [name]: entry }` map; a single
      // package name gets the flat `{ downloads }` shape of the point endpoint.
      if (batch.length === 1) {
        const entry = result as BulkDownloadEntry
        if (typeof entry.downloads === 'number' && Number.isFinite(entry.downloads))
          store(type, batch[0]!, entry.downloads)
        return
      }

      for (const [name, entry] of Object.entries(result)) {
        if (entry && typeof entry.downloads === 'number' && Number.isFinite(entry.downloads))
          store(type, name, entry.downloads)
      }
    }),
    (async () => {
      for (const name of scoped) {
        const [monthValue, weekValue] = await Promise.all([
          fetchNpmDownload(name, 'month'),
          fetchNpmDownload(name, 'week'),
        ])
        if (monthValue !== undefined)
          store('month', name, monthValue)
        if (weekValue !== undefined)
          store('week', name, weekValue)
        await sleep(SCOPED_REQUEST_GAP_MS)
      }
    })(),
  ])

  return { monthly, weekly }
}

export async function getGithubStar(repo: string): Promise<number> {
  const result = await fetchWithRetry(async () => {
    const data = await ofetch<GithubInfo>(`https://ungh.cc/repos/${repo}`, { retry: 0 })
    if (!data?.repo || typeof data.repo.stars !== 'number' || !Number.isFinite(data.repo.stars))
      throw new Error(`invalid repo payload for ${repo}`)
    return data
  })
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

/** JSON.stringify with deterministic key order, so two objects differing only in key order compare equal. */
export function stableStringify(value: unknown): string {
  if (Array.isArray(value))
    return `[${value.map(stableStringify).join(',')}]`
  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value)
      .filter(([, item]) => item !== undefined)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([key, item]) => `${JSON.stringify(key)}:${stableStringify(item)}`)
    return `{${entries.join(',')}}`
  }
  return JSON.stringify(value)
}
