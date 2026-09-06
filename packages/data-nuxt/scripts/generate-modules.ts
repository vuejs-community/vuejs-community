import type { CommunityProject } from '@vuejs-community/schema'
import { existsSync } from 'node:fs'
import { copyFile, mkdir, readFile, rm } from 'node:fs/promises'
import { dirname, parse as ParseFile, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
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

/** 本地图标集目录（nuxt.config.ts 中 prefix 'icon' 对应的 dir） */
const appIconDir = resolve(packageRoot, '../../app/assets/icon')

/**
 * 校验 yml 的 icon 是否指向下载仓库 icons/ 目录里的真实 svg 文件，
 * 通过则返回仓库内的 svg 源路径，否则返回 null。
 */
async function resolveModuleIconAsset(repoDir: string, icon: string): Promise<string | null> {
  if (!icon || !icon.endsWith('.svg'))
    return null

  const sourcePath = resolve(repoDir, 'icons', icon)
  if (!existsSync(sourcePath))
    return null

  const content = await readFile(sourcePath, 'utf-8')
  return content.includes('<svg') ? sourcePath : null
}

/**
 * 把模块图标落到 app/assets/icon（已存在则跳过，不覆盖），返回 defineProjectMeta
 * 使用的图标名 `icon:xxx`（不带 .svg 后缀）；校验或复制失败时回退为空字符串。
 */
export async function syncModuleIcon(repoDir: string, icon: string): Promise<string> {
  try {
    const sourcePath = await resolveModuleIconAsset(repoDir, icon)
    if (!sourcePath)
      return ''

    const targetPath = resolve(appIconDir, icon)
    if (!existsSync(targetPath))
      await copyFile(sourcePath, targetPath)

    return `icon:${ParseFile(icon).name}`
  }
  catch (error) {
    console.error(`[icon] failed to sync icon: ${icon}`, error)
    return ''
  }
}

function buildModuleProject(module: NuxtModule, stats: ModuleStats, icon: string): CommunityProject {
  return {
    name: module.name,
    // 个别上游 yml 没有 description（JSON.stringify 会把 undefined 的 key 丢掉），兜底为空串保证字段必写入。
    description: module.description ?? '',
    icon,
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

async function writeModules(entries: ModuleEntry[], stats: Awaited<ReturnType<typeof fetchModuleStats>>, repoDir: string) {
  const results = { updated: 0, unchanged: 0, failed: 0 }

  for (const { fileName, module } of entries) {
    const modulePath = resolve(packageRoot, `src/${fileName}.ts`)

    try {
      const icon = await syncModuleIcon(repoDir, module.icon)
      // 抓取失败的值回退到已存文件的旧值（地图中缺失 ≠ 0），避免用 0 覆盖好数据。
      const existingProject = existsSync(modulePath) ? await readProjectMeta(modulePath) : null
      const fallback = existingProject?.stats
      const project = buildModuleProject(module, {
        stars: module.repo ? stats.stars.get(module.repo) ?? fallback?.stars ?? 0 : 0,
        monthly: module.npm ? stats.downloads.monthly.get(module.npm) ?? fallback?.downloads?.monthly ?? 0 : 0,
        weekly: module.npm ? stats.downloads.weekly.get(module.npm) ?? fallback?.downloads?.weekly ?? 0 : 0,
      }, icon)

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
    await mkdir(appIconDir, { recursive: true })

    const entries = await collectModules(dir)
    const stats = await fetchModuleStats(entries)
    const results = await writeModules(entries, stats, dir)

    console.log(`All done! modules: ${entries.length}, updated: ${results.updated}, unchanged: ${results.unchanged}, failed: ${results.failed}`)
  }
  finally {
    console.log(`Deleting temporary directory: ${dir}`)
    await rm(dir, { recursive: true, force: true })
    console.log('Temporary directory deleted')
  }
}

// 直接执行时才启动完整生成流程，被 import 时只暴露上面的工具函数。
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  generateModules().catch((error) => {
    console.error('generation failed.', error)
    process.exitCode = 1
  })
}
