import type { CommunityProject } from '@vuejs-community/schema'
import { existsSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getGithubStars, getNpmDownloads, readProjectMeta } from '@vuejs-community/shared'
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

/** Projects without an npm package name (e.g. the admin templates collected in data-admin) are not published to npm; only stars are backfilled, downloads are omitted. */
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

/** Locate the byte range of a top-level `  key: { ... }` block (including its closing brace) in an object literal. Values in data files are strings/numbers/arrays and never contain braces, so brace counting is safe. */
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
      const project = await readProjectMeta(file)
      targets.push({
        filePath: file,
        relativePath: file.replace(`${repositoryRoot}/`, ''),
        project,
        npmName: project.source?.npm || '',
        githubRepo: project.source?.github?.split('#')[0],
      })
    }
  }

  return targets
}

/** Fetch all stats in a single batch: npm downloads go through the bulk endpoint with a serial lane for scoped packages; stars share a small concurrency pool. */
async function fetchStats(targets: SyncTarget[]) {
  const npmNames = targets.map(target => target.npmName).filter((name): name is string => Boolean(name))
  const repos = targets.map(target => target.githubRepo).filter((repo): repo is string => Boolean(repo))

  const [stars, downloads] = await Promise.all([
    getGithubStars(repos),
    getNpmDownloads(npmNames),
  ])

  console.log(`[fetched] github stars (${stars.size}): ${JSON.stringify(Object.fromEntries(stars))}`)
  console.log(`[fetched] npm downloads (${downloads.monthly.size}): ${JSON.stringify({ monthly: Object.fromEntries(downloads.monthly), weekly: Object.fromEntries(downloads.weekly) })}`)

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

  // Fall back to the old values already stored in the file when a fetch failed (missing from the map ≠ 0) so good data is never overwritten with 0.
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
