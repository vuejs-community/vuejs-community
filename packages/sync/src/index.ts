import type { CommunityProject } from '@vuejs-community/schema'
import type { FetchError } from 'ofetch'
import { writeFile } from 'node:fs/promises'
import { setTimeout } from 'node:timers/promises'
import { renderProjectMetaSource } from '@vuejs-community/shared'
import { loadDotenv } from 'c12'
import { glob } from 'glob'
import { createJiti } from 'jiti'
import { ofetch } from 'ofetch'
import pLimit from 'p-limit'

const jiti = createJiti(import.meta.url)

const dataPackages = [
  'data-ui',
  'data-component',
  'data-hooks',
  'data-admin',
  'data-nuxt',
  'data-plugins',
  'data-uniapp',
]

const npms = new Map<string, {
  file: string
  npm: string
}>()

const scopes = new Map<string, {
  file: string
  npm: string
}>()

const githubs = new Map<string, {
  file: string
  github: string
}>()

interface NpmDownloadEntry {
  downloads: number
}

type NpmDownloadsResponse = Record<string, NpmDownloadEntry>
type Downloads = NonNullable<NonNullable<CommunityProject['stats']>['downloads']>

interface Config {
  token: string
}

interface GithubRepoResponse {
  stargazers_count: number
}

// ---------------------------------------------------------------------------
// Retry / rate-limit helpers
// ---------------------------------------------------------------------------

function getRetryAfterMs(error: unknown, fallbackMs: number): number {
  const fetchError = error as FetchError
  const header = fetchError?.response?.headers?.get?.('retry-after')
  if (header) {
    const asNumber = Number(header)
    if (!Number.isNaN(asNumber))
      return Math.max(asNumber * 1000, fallbackMs)

    const asDate = Date.parse(header)
    if (!Number.isNaN(asDate))
      return Math.max(asDate - Date.now(), fallbackMs)
  }
  return fallbackMs
}

function isRateLimited(error: unknown): boolean {
  const status = (error as FetchError)?.response?.status
    ?? (error as FetchError)?.statusCode
  return status === 429 || status === 403
}

async function withRetry<T>(
  label: string,
  fn: () => Promise<T>,
  options: {
    retries?: number
    baseDelayMs?: number
  } = {},
): Promise<T> {
  const retries = options.retries ?? 5
  const baseDelayMs = options.baseDelayMs ?? 1000
  let lastError: unknown

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn()
    }
    catch (error) {
      lastError = error
      if (attempt === retries)
        break

      const delay = isRateLimited(error)
        ? Math.max(getRetryAfterMs(error, 10_000), 10_000 * (attempt + 1))
        : baseDelayMs * 2 ** attempt

      console.warn(
        `[retry] ${label} attempt ${attempt + 1}/${retries}, wait ${Math.round(delay / 1000)}s: ${(error as Error).message}`,
      )
      await setTimeout(delay)
    }
  }

  throw lastError
}

function createNpmThrottle(minIntervalMs = 250) {
  let nextAvailableAt = 0
  let extraDelayMs = 0

  return {
    async wait() {
      const now = Date.now()
      const target = Math.max(now, nextAvailableAt) + extraDelayMs
      const delay = target - now
      nextAvailableAt = target + minIntervalMs
      if (delay > 0)
        await setTimeout(delay)
    },
    onSuccess() {
      extraDelayMs = Math.max(0, extraDelayMs - 50)
    },
    onRateLimit(retryAfterMs: number) {
      extraDelayMs = Math.max(extraDelayMs, 1000)
      nextAvailableAt = Math.max(nextAvailableAt, Date.now() + retryAfterMs)
    },
  }
}

const npmThrottle = createNpmThrottle(250)

// ---------------------------------------------------------------------------
// npm / github API
// ---------------------------------------------------------------------------

async function getNpmDownloads(
  packages: string,
  options: { parallelPeriods?: boolean } = {},
) {
  const parallelPeriods = options.parallelPeriods ?? false

  const request = async (period: 'week' | 'month'): Promise<NpmDownloadsResponse> => {
    try {
      const response = await withRetry(
        `npm ${packages} (${period})`,
        async () => {
          await npmThrottle.wait()
          try {
            const res = await ofetch<NpmDownloadsResponse | NpmDownloadEntry>(
              `https://api.npmjs.org/downloads/point/last-${period}/${packages}`,
              { retry: 0, timeout: 30000 },
            )
            npmThrottle.onSuccess()
            return res
          }
          catch (error) {
            if (isRateLimited(error))
              npmThrottle.onRateLimit(getRetryAfterMs(error, 5000))
            throw error
          }
        },
        { retries: 6, baseDelayMs: 2000 },
      )

      return typeof response.downloads === 'number'
        ? { [packages]: { downloads: response.downloads } }
        : response as NpmDownloadsResponse
    }
    catch (error) {
      console.warn(`[npm] ${packages} (${period}): ${(error as Error).message}, fallback to 0`)
      return { [packages]: { downloads: 0 } }
    }
  }

  if (parallelPeriods) {
    const [weekly, monthly] = await Promise.all([request('week'), request('month')])
    return { weekly, monthly }
  }

  const weekly = await request('week')
  const monthly = await request('month')
  return { weekly, monthly }
}

async function updateNpmDownloads(file: string, downloads: Downloads): Promise<boolean> {
  const content = await jiti.import<CommunityProject>(file, { default: true })

  const updated = {
    ...content,
    stats: {
      stars: content.stats?.stars || 0,
      downloads,
    },
  } as const

  await writeFile(file, renderProjectMetaSource(updated), 'utf-8')
  return true
}

async function getGithubRepo(github: string, token: string) {
  return await withRetry(
    `github ${github}`,
    () => ofetch<GithubRepoResponse>(
      `https://api.github.com/repos/${github}`,
      {
        retry: 0,
        timeout: 30000,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    ),
    { retries: 5, baseDelayMs: 2000 },
  )
}

async function updateGithubStars(file: string, stars: number): Promise<boolean> {
  const content = await jiti.import<CommunityProject>(file, { default: true })

  const updated = {
    ...content,
    stats: {
      stars,
      downloads: content.stats?.downloads,
    },
  } as const

  await writeFile(file, renderProjectMetaSource(updated), 'utf-8')
  return true
}

// ---------------------------------------------------------------------------
// sync stages
// ---------------------------------------------------------------------------

async function syncUnscopedNpm(entries: Array<{ file: string, npm: string }>) {
  const npmBatchSize = 120
  const batches = Array.from(
    { length: Math.ceil(entries.length / npmBatchSize) },
    (_, index) => entries.slice(index * npmBatchSize, (index + 1) * npmBatchSize),
  )

  console.log(`[npm] unscoped: ${entries.length} packages, ${batches.length} batches`)

  let totalUpdated = 0

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i]!
    if (i > 0)
      await setTimeout(800)

    const packages = batch.map(item => item.npm).join(',')
    console.log(`[npm] batch ${i + 1}/${batches.length}: ${batch.length} packages`)

    const { weekly, monthly } = await getNpmDownloads(packages, { parallelPeriods: true })
    let updated = 0

    for (const [name, month] of Object.entries(monthly)) {
      const target = npms.get(name)
      const week = weekly[name]

      if (!target || !month || !week) {
        console.warn(`[skip] ${name}: missing npm download data`)
        continue
      }

      const changed = await updateNpmDownloads(target.file, {
        monthly: month.downloads,
        weekly: week.downloads,
      })
      if (changed)
        updated++
    }

    totalUpdated += updated
    console.log(`[npm] batch ${i + 1} updated ${updated}/${batch.length}`)
  }

  console.log(`[npm] unscoped done, updated ${totalUpdated}`)
}

async function syncScopedNpmWave(
  entries: Array<{ file: string, npm: string }>,
  waveIndex: number,
  waveTotal: number,
) {
  const concurrency = 2
  const limit = pLimit(concurrency)
  let done = 0
  let updated = 0
  const total = entries.length

  console.log(
    `[npm] scoped wave ${waveIndex}/${waveTotal}: ${total} packages, concurrency=${concurrency}`,
  )

  await Promise.all(entries.map(({ file, npm }) => limit(async () => {
    try {
      const { weekly, monthly } = await getNpmDownloads(npm, { parallelPeriods: false })
      const week = weekly[npm]
      const month = monthly[npm]

      if (!week || !month) {
        console.warn(`[skip] ${npm}: missing npm download data`)
      }
      else {
        await updateNpmDownloads(file, {
          monthly: month.downloads,
          weekly: week.downloads,
        })
        updated++
      }
    }
    catch (error) {
      console.warn(`[skip] ${npm}: ${(error as Error).message}`)
    }
    finally {
      done++
      if (done % 50 === 0 || done === total) {
        console.log(
          `[npm] scoped wave ${waveIndex}/${waveTotal} progress ${done}/${total}, updated ${updated}`,
        )
      }
    }
  })))

  console.log(
    `[npm] scoped wave ${waveIndex}/${waveTotal} done, updated ${updated}/${total}`,
  )
}

async function syncScopedNpm(entries: Array<{ file: string, npm: string }>) {
  const chunkSize = 300
  const waveGapMs = 15_000
  const waves = Array.from(
    { length: Math.ceil(entries.length / chunkSize) },
    (_, index) => entries.slice(index * chunkSize, (index + 1) * chunkSize),
  )

  console.log(
    `[npm] scoped: ${entries.length} packages, ${waves.length} waves (chunk=${chunkSize}, gap=${waveGapMs}ms)`,
  )

  for (let i = 0; i < waves.length; i++) {
    await syncScopedNpmWave(waves[i]!, i + 1, waves.length)

    if (i + 1 < waves.length) {
      console.log(`[npm] scoped resting ${waveGapMs / 1000}s before next wave...`)
      await setTimeout(waveGapMs)
    }
  }

  console.log(`[npm] scoped all waves done`)
}

async function syncGithub(
  entries: Array<{ file: string, github: string }>,
  token: string,
) {
  const concurrency = 8
  const limit = pLimit(concurrency)
  let done = 0
  let updated = 0
  const total = entries.length

  console.log(`[github] ${total} repos, concurrency=${concurrency}`)

  await Promise.all(entries.map(({ file, github }) => limit(async () => {
    try {
      const repo = await getGithubRepo(github, token)
      await updateGithubStars(file, repo.stargazers_count)
      updated++
    }
    catch (error) {
      console.warn(`[skip] ${github}: ${(error as Error).message}`)
    }
    finally {
      done++
      if (done % 200 === 0 || done === total)
        console.log(`[github] progress ${done}/${total}, updated ${updated}`)
    }
  })))

  console.log(`[github] done, updated ${updated}/${total}`)
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

async function main(config: Config): Promise<void> {
  const files = await Promise.all(
    dataPackages.map(packageName => glob('src/**/*.ts', {
      cwd: new URL(`../../${packageName}/`, import.meta.url),
      absolute: true,
      nodir: true,
    })),
  ).then(results => results.flat())

  console.log(`[scan] found ${files.length} project files`)

  const loadLimit = pLimit(30)
  await Promise.all(files.map(file => loadLimit(async () => {
    const context = await jiti.import<CommunityProject>(file, { default: true })
    const { npm, github } = context.source ?? {}

    if (npm) {
      if (npm.startsWith('@'))
        scopes.set(npm, { file, npm })
      else
        npms.set(npm, { file, npm })
    }

    if (github)
      githubs.set(github, { file, github })
  })))

  console.log(
    `[scan] unscoped=${npms.size}, scoped=${scopes.size}, github=${githubs.size}`,
  )

  await syncUnscopedNpm(Array.from(npms.values()))
  await syncScopedNpm(Array.from(scopes.values()))
  await syncGithub(Array.from(githubs.values()), config.token)

  console.log('[sync] all done')
}

;(async () => {
  const env = await loadDotenv({
    cwd: new URL('../../../', import.meta.url).pathname,
  })

  const config = {
    token: env.GENERATE_TOKEN ?? process.env.GENERATE_TOKEN!,
  }
  await main(config)
})()
