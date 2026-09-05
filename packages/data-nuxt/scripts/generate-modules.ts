import type { CommunityProject } from '@vuejs-community/schema'
import { existsSync } from 'node:fs'
import { readFile, rm } from 'node:fs/promises'
import { dirname, parse as ParseFile, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getGithubStars, getNpmDownloads, readProjectMeta, writeProjectMetaIfChanged } from '@vuejs-community/shared'
import { downloadTemplate } from 'giget'
import { glob } from 'glob'
import { parse } from 'yaml'

interface NuxtModule {
  name: string
  description: string
  repo: string
  npm: string
  icon: string
  github: string
  website: string
  learn_more: string
  category: string
  type: string
}

interface ModuleStats {
  stars: number
  monthly: number
  weekly: number
}

interface ModuleEntry {
  fileName: string
  module: NuxtModule
}

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function buildModuleProject(module: NuxtModule, stats: ModuleStats): CommunityProject {
  return {
    name: module.name,
    description: module.description,
    category: 'nuxt',
    types: [module.category],

    filter: [module.type],

    links: {
      github: module.github,
      npm: `https://npmjs.com/package/${module.npm}`,
      website: module?.website || '',
    },

    source: {
      github: module.repo,
      npm: module.npm,
    },

    stats: {
      stars: stats.stars,
      downloads: {
        monthly: stats.monthly,
        weekly: stats.weekly,
      },
    },
  }
}

async function collectModules(dir: string): Promise<ModuleEntry[]> {
  const ymlFiles = await glob('modules/*.yml', {
    cwd: dir,
    absolute: true,
  })

  console.log(`Found ${ymlFiles.length} yml files`)

  const entries: ModuleEntry[] = []
  for (const filePath of ymlFiles) {
    try {
      const content = await readFile(filePath, 'utf-8')
      const fileName = ParseFile(filePath).name
      const module = parse(content) as NuxtModule
      entries.push({ fileName, module })
    }
    catch (err) {
      console.error(`Failed to parse: ${filePath}`, err)
    }
  }
  return entries
}

/** Stats for all modules are fetched up front: npm downloads go through the bulk endpoint (scoped names over a serialized lane), stars share a small concurrency pool. */
async function fetchModuleStats(entries: ModuleEntry[]) {
  const npmNames = entries.map(({ module }) => module.npm).filter(Boolean)
  const repos = entries.map(({ module }) => module.repo).filter(Boolean)

  const [stars, downloads] = await Promise.all([
    getGithubStars(repos),
    getNpmDownloads(npmNames),
  ])

  return { stars, downloads }
}

async function writeModules(entries: ModuleEntry[], stats: Awaited<ReturnType<typeof fetchModuleStats>>) {
  const results = { updated: 0, unchanged: 0, failed: 0 }

  for (const { fileName, module } of entries) {
    const modulePath = resolve(packageRoot, `src/${fileName}.ts`)

    try {
      // 抓取失败的值回退到已存文件的旧值（地图中缺失 ≠ 0），避免用 0 覆盖好数据。
      const existingProject = existsSync(modulePath) ? await readProjectMeta(modulePath) : null
      const fallback = existingProject?.stats
      const project = buildModuleProject(module, {
        stars: module.repo ? stats.stars.get(module.repo) ?? fallback?.stars ?? 0 : 0,
        monthly: module.npm ? stats.downloads.monthly.get(module.npm) ?? fallback?.downloads?.monthly ?? 0 : 0,
        weekly: module.npm ? stats.downloads.weekly.get(module.npm) ?? fallback?.downloads?.weekly ?? 0 : 0,
      })

      const result = await writeProjectMetaIfChanged(modulePath, project)
      if (result === 'unchanged') {
        results.unchanged++
        continue
      }

      console.log(`[${result}] ${fileName}.ts`)
      results.updated++
    }
    catch (error) {
      console.error(`[error] ${fileName}`, error)
      results.failed++
    }
  }

  return results
}

async function generateModules() {
  console.log('Downloading the nuxt/modules repository...', packageRoot)

  const resolveNuxtModulesPath = resolve(packageRoot, 'nuxt-modules')

  const { dir } = await downloadTemplate('github:nuxt/modules', {
    dir: resolveNuxtModulesPath,
    force: true,
    forceClean: true,
  })

  console.log(`Repository downloaded to: ${dir}`)

  try {
    const entries = await collectModules(dir)
    const stats = await fetchModuleStats(entries)
    const results = await writeModules(entries, stats)

    console.log(`All done! modules: ${entries.length}, updated: ${results.updated}, unchanged: ${results.unchanged}, failed: ${results.failed}`)
  }
  finally {
    console.log(`Deleting temporary directory: ${dir}`)
    await rm(dir, { recursive: true, force: true })
    console.log('Temporary directory deleted')
  }
}

generateModules().catch((error) => {
  console.error('generation failed.', error)
  process.exitCode = 1
})
