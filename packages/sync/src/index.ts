import type { CommunityProject } from '@vuejs-community/schema'
import { writeFile } from 'node:fs/promises'
import { setTimeout } from 'node:timers/promises'
import { renderProjectMetaSource } from '@vuejs-community/shared'
import { loadDotenv } from 'c12'
import { glob } from 'glob'
import { createJiti } from 'jiti'
import { ofetch } from 'ofetch'

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

type NpmDownloadsResponse = Record<string, NpmDownloadEntry | null>
type Downloads = NonNullable<NonNullable<CommunityProject['stats']>['downloads']>

interface Config {
  token?: string
}
async function getNpmDownloads(packages: string) {
  const request = async (period: 'week' | 'month'): Promise<NpmDownloadsResponse> => {
    const response = await ofetch<NpmDownloadsResponse | NpmDownloadEntry>(
      `https://api.npmjs.org/downloads/point/last-${period}/${packages}`,
      { retry: 0, timeout: 30000 },
    )

    return typeof response.downloads === 'number'
      ? { [packages]: { downloads: response.downloads } }
      : response as NpmDownloadsResponse
  }

  const [weekly, monthly] = await Promise.all([request('week'), request('month')])

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

interface GithubRepoResponse {
  stargazers_count: number
}

async function getGithubRepo(github: string, token?: string) {
  return await ofetch<GithubRepoResponse>(
    `https://api.github.com/repos/${github}`,
    {
      retry: 0,
      timeout: 30000,
      headers: {
        ...(token
          ? { Authorization: `Bearer ${token}` }
          : {}),
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
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

async function main(config: Config): Promise<void> {
  const files = await Promise.all(
    dataPackages.map(packageName => glob('src/**/*.ts', {
      cwd: new URL(`../../${packageName}/`, import.meta.url),
      absolute: true,
      nodir: true,
    })),
  ).then(results => results.flat())

  let loading = Promise.resolve()

  files.forEach((file) => {
    loading = loading.then(async () => {
      const context = await jiti.import<CommunityProject>(file, { default: true })
      const { npm, github } = context.source ?? {}

      if (npm) {
        if (npm.startsWith('@')) {
          scopes.set(npm, { file, npm })
        }
        else {
          npms.set(npm, { file, npm })
        }
      }

      if (github) {
        githubs.set(github, { file, github })
      }
    })
  })

  await loading

  const npmEntries = Array.from(npms.values())
  const npmBatchSize = 120
  const npmBatches = Array.from(
    { length: Math.ceil(npmEntries.length / npmBatchSize) },
    (_, index) => npmEntries.slice(index * npmBatchSize, (index + 1) * npmBatchSize),
  )

  // const outputs = {
  //   npms: npmBatches,
  //   scopes: Array.from(scopes.values()),
  //   githubs: Array.from(githubs.values()),
  // }
  //
  // await Promise.all(
  //   Object.entries(outputs).map(([name, data]) => writeFile(
  //     new URL(`./${name}.txt`, import.meta.url),
  //     `${JSON.stringify(data, null, 2)}\n`,
  //     'utf-8',
  //   )),
  // )
  let syncing = Promise.resolve()

  npmBatches.forEach((batch) => {
    syncing = syncing.then(async () => {
      await setTimeout(3000)

      const packages = batch.map(item => item.npm).join(',')
      console.log(`[npm]: ${packages}`)
      const { weekly, monthly } = await getNpmDownloads(packages)
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
        if (changed) {
          updated++
        }
      }

      console.log(`[npm] Updated ${updated} files from ${batch.length} packages`)
    })
  })

  scopes.forEach(({ file, npm }) => {
    syncing = syncing.then(async () => {
      await setTimeout(3000)

      console.log(`[npm]: ${npm}`)
      const { weekly, monthly } = await getNpmDownloads(npm)
      const week = weekly[npm]
      const month = monthly[npm]

      if (!week || !month) {
        console.warn(`[skip] ${npm}: missing npm download data`)
        return
      }

      await updateNpmDownloads(file, {
        monthly: month.downloads,
        weekly: week.downloads,
      })
      console.log(`[npm] Updated downloads for ${npm}`)
    })
  })

  githubs.forEach(({ file, github }) => {
    syncing = syncing.then(async () => {
      await setTimeout(500)

      try {
        console.log(`[github]:${github}`)
        const repo = await getGithubRepo(github, config.token)

        if (!repo) {
          console.warn(`[skip] ${github}: missing github repo data`)
          return
        }

        await updateGithubStars(file, repo.stargazers_count)
        console.log(`[github] Updated stars for ${github} -> ${repo.stargazers_count}`)
      }
      catch (error) {
        console.warn(`[skip] ${github}: ${(error as Error).message}`)
      }
    })
  })

  await syncing
}

(async () => {
  const env = await loadDotenv({
    cwd: new URL('../../../', import.meta.url).pathname,
  })

  const config = {
    token: env.GENERATE_TOKEN ?? process.env.GENERATE_TOKEN,
  }
  await main(config)
})()
