import type { CommunityProject } from '@vuejs-community/schema'
import { existsSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { getGithubStars, getNpmDownloads } from '@vuejs-community/shared'
import { glob } from 'glob'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = resolve(scriptDirectory, '..')

const targetRoots = [
  'packages/data-ui/src',
  'packages/data-hooks/src',
  'packages/data-component/src',
  'packages/data-uniapp/src',
  'packages/data-admin/src',
].map(root => resolve(repositoryRoot, root))

const dryRun = process.argv.includes('--dry-run')

interface SyncResult {
  updated: number
  unchanged: number
  skipped: number
}

interface SyncTarget {
  filePath: string
  relativePath: string
  project: CommunityProject
  npmName?: string
  githubRepo?: string
}

/** 没有 npm 包名的项目（如 data-admin 收录的管理端模板）不发布到 npm，只回填 stars，不写 downloads。 */
function buildStatsBlock(stars: number, downloads?: { monthly: number, weekly: number }): string {
  const lines = [
    '  stats: {',
    `    stars: ${stars},`,
  ]

  if (downloads) {
    lines.push(
      '    downloads: {',
      `      monthly: ${downloads.monthly},`,
      `      weekly: ${downloads.weekly},`,
      '    },',
    )
  }

  lines.push('  },')
  return lines.join('\n')
}

/** 定位对象字面量里顶层 `  key: { ... }` 块的字节范围（含闭合花括号）。数据文件的值都是字符串/数字/数组，不含花括号字符，可以放心用括号计数。 */
function findBlockRange(content: string, key: string): [start: number, end: number] | null {
  const opening = new RegExp(`^ {2}${key}: \\{`, 'm').exec(content)
  if (!opening)
    return null

  let depth = 0
  for (let i = opening.index + opening[0].length - 1; i < content.length; i++) {
    if (content[i] === '{') {
      depth++
    }
    else if (content[i] === '}') {
      depth--
      if (depth === 0)
        return [opening.index, i + 1]
    }
  }
  return null
}

function applyStats(content: string, statsBlock: string): string {
  const blockRange = findBlockRange(content, 'stats')
  if (blockRange) {
    const [, end] = blockRange
    const blockEnd = content[end] === ',' ? end + 1 : end
    return content.slice(0, blockRange[0]) + statsBlock + content.slice(blockEnd)
  }

  const closingIndex = content.lastIndexOf('})')
  if (closingIndex === -1)
    throw new Error('cannot locate the closing `})`')

  const prefix = content.slice(0, closingIndex).replace(/\s+$/, '')
  const comma = prefix.endsWith(',') || prefix.endsWith('{') ? '' : ','
  return `${prefix}${comma}\n${statsBlock}\n${content.slice(closingIndex)}`
}

async function collectTargets(results: SyncResult): Promise<SyncTarget[]> {
  const targets: SyncTarget[] = []

  for (const root of targetRoots) {
    if (!existsSync(root)) {
      console.warn(`[skip] ${root.replace(`${repositoryRoot}/`, '')}: directory does not exist`)
      continue
    }

    const files = (await glob('**/*.ts', { cwd: root, nodir: true }))
      .filter(file => !file.endsWith('.d.ts'))
      .sort()
      .map(file => resolve(root, file))

    for (const file of files) {
      try {
        const imported = await import(pathToFileURL(file).href)
        const project = imported.default as CommunityProject
        targets.push({
          filePath: file,
          relativePath: file.replace(`${repositoryRoot}/`, ''),
          project,
          npmName: project.source?.npm,
          githubRepo: project.source?.github?.split('#')[0],
        })
      }
      catch (error) {
        console.error(`[error] ${file.replace(`${repositoryRoot}/`, '')}`, error)
        results.skipped++
      }
    }
  }

  return targets
}

/** 整批统计一次性抓取：npm 下载量走批量端点 + scoped 串行车池，star 共享一个小并发池。 */
async function fetchStats(targets: SyncTarget[]) {
  const npmNames = targets.map(target => target.npmName).filter((name): name is string => Boolean(name))
  const repos = targets.map(target => target.githubRepo).filter((repo): repo is string => Boolean(repo))

  const [stars, downloads] = await Promise.all([
    getGithubStars(repos),
    getNpmDownloads(npmNames),
  ])

  return { stars, downloads }
}

async function syncTarget(
  target: SyncTarget,
  stats: Awaited<ReturnType<typeof fetchStats>>,
  results: SyncResult,
): Promise<void> {
  const { relativePath, project, npmName, githubRepo } = target

  if (!npmName && !githubRepo) {
    console.warn(`[skip] ${relativePath}: no source.npm / source.github`)
    results.skipped++
    return
  }

  // 抓取失败的值回退到文件里已存的旧值（地图中缺失 ≠ 0），避免用 0 覆盖好数据。
  const existing = project.stats
  const stars = githubRepo ? stats.stars.get(githubRepo) ?? existing?.stars ?? 0 : 0
  const downloads = npmName
    ? {
        monthly: stats.downloads.monthly.get(npmName) ?? existing?.downloads?.monthly ?? 0,
        weekly: stats.downloads.weekly.get(npmName) ?? existing?.downloads?.weekly ?? 0,
      }
    : undefined

  if (existing?.stars === stars
    && existing?.downloads?.monthly === downloads?.monthly
    && existing?.downloads?.weekly === downloads?.weekly) {
    console.log(`[unchanged] ${relativePath}`)
    results.unchanged++
    return
  }

  const content = await readFile(target.filePath, 'utf-8')
  const updated = applyStats(content, buildStatsBlock(stars, downloads))

  if (dryRun) {
    console.log(`[dry-run] ${relativePath}:\n${updated}\n`)
  }
  else {
    await writeFile(target.filePath, updated)
    console.log(`[updated] ${relativePath}: stars ${stars}${downloads ? `, monthly ${downloads.monthly}, weekly ${downloads.weekly}` : ''}`)
  }
  results.updated++
}

async function main(): Promise<void> {
  const results: SyncResult = { updated: 0, unchanged: 0, skipped: 0 }

  const targets = await collectTargets(results)
  const stats = await fetchStats(targets)

  for (const target of targets)
    await syncTarget(target, stats, results)

  console.log(`\nDone. files: ${targets.length}, updated: ${results.updated}, unchanged: ${results.unchanged}, skipped: ${results.skipped}${dryRun ? ' (dry-run, nothing written)' : ''}`)
}

main().catch((error) => {
  console.error('sync failed.', error)
  process.exitCode = 1
})
