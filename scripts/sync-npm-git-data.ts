import type { CommunityProject } from '@vuejs-community/schema'
import { existsSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { getGithubStar, getNpmPackageDownload, sleep } from '@vuejs-community/shared'
import { glob } from 'glob'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = resolve(scriptDirectory, '..')

const targetRoots = [
  'packages/data-ui/src',
  'packages/data-hooks/src',
  'packages/data-component/src',
].map(root => resolve(repositoryRoot, root))

const dryRun = process.argv.includes('--dry-run')

interface SyncResult {
  updated: number
  unchanged: number
  skipped: number
}

function buildStatsBlock(stars: number, monthly: number, weekly: number): string {
  return [
    '  stats: {',
    `    stars: ${stars},`,
    '    downloads: {',
    `      monthly: ${monthly},`,
    `      weekly: ${weekly},`,
    '    },',
    '  },',
  ].join('\n')
}

/** 定位对象字面量里顶层 `  key: { ... }` 块的字节范围（含闭合花括号）。数据文件的值都是字符串/数字/数组，不含花括号字符，可以放心用括号计数。 */
function findBlockRange(content: string, key: string): [start: number, end: number] | undefined {
  const opening = new RegExp(`^ {2}${key}: \\{`, 'm').exec(content)
  if (!opening)
    return undefined

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
  return undefined
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

async function syncFile(filePath: string, results: SyncResult): Promise<void> {
  const relativePath = filePath.replace(`${repositoryRoot}/`, '')
  const imported = await import(pathToFileURL(filePath).href)
  const project = imported.default as CommunityProject

  const npmName = project.source?.npm
  const githubRepo = project.source?.github?.split('#')[0]

  if (!npmName && !githubRepo) {
    console.warn(`[skip] ${relativePath}: no source.npm / source.github`)
    results.skipped++
    return
  }

  const [stars, monthly, weekly] = await Promise.all([
    githubRepo ? getGithubStar(githubRepo) : 0,
    npmName ? getNpmPackageDownload(npmName, 'month') : 0,
    npmName ? getNpmPackageDownload(npmName, 'week') : 0,
  ])

  const existing = project.stats
  if (stars === 0 && monthly === 0 && weekly === 0
    && ((existing?.stars ?? 0) > 0 || (existing?.downloads?.monthly ?? 0) > 0 || (existing?.downloads?.weekly ?? 0) > 0)) {
    console.warn(`[skip] ${relativePath}: all fetched stats are 0, keep existing values`)
    results.skipped++
    return
  }

  if (existing?.stars === stars
    && existing?.downloads?.monthly === monthly
    && existing?.downloads?.weekly === weekly) {
    console.log(`[unchanged] ${relativePath}`)
    results.unchanged++
    return
  }

  const content = await readFile(filePath, 'utf-8')
  const updated = applyStats(content, buildStatsBlock(stars, monthly, weekly))

  if (dryRun) {
    console.log(`[dry-run] ${relativePath}:\n${updated}\n`)
  }
  else {
    await writeFile(filePath, updated)
    console.log(`[updated] ${relativePath}: stars ${stars}, monthly ${monthly}, weekly ${weekly}`)
  }
  results.updated++
}

async function main(): Promise<void> {
  const results: SyncResult = { updated: 0, unchanged: 0, skipped: 0 }
  let total = 0

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
        await syncFile(file, results)
      }
      catch (error) {
        console.error(`[error] ${file.replace(`${repositoryRoot}/`, '')}`, error)
        results.skipped++
      }
      total++
      await sleep(200)
    }
  }

  console.log(`\nDone. files: ${total}, updated: ${results.updated}, unchanged: ${results.unchanged}, skipped: ${results.skipped}${dryRun ? ' (dry-run, nothing written)' : ''}`)
}

main().catch((error) => {
  console.error('sync failed.', error)
  process.exitCode = 1
})
