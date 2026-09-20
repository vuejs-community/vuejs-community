import type { CommunityProject } from '@vuejs-community/schema'
import type { NpmSearchObject, PluginDefinition, PluginType } from './types.js'
import { existsSync } from 'node:fs'
import { mkdir, rename, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { communityProjectSchema } from '@vuejs-community/schema'
import {
  readProjectMeta,
  renderProjectMetaSource,
  stableStringify,
} from '@vuejs-community/shared'
import PQueue from 'p-queue'
import { NpmClient } from './npm-client.js'
import { PLUGIN_DEFINITIONS } from './types.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(__dirname, '../../../data-plugins/src')
const METRICS_STAGING_PATH = join(__dirname, '../../../../.cache/plugin-npm-metrics.json')

interface PluginNpmMetric {
  packageName: string
  downloadsMonthly: number
  downloadsWeekly: number
  updatedAt: string
}

export interface CollectedPlugin {
  npmMetric: PluginNpmMetric
  project: CommunityProject
  type: PluginType
}

function extractGitHubRepository(repository: string): string {
  const match = repository.match(/github\.com[/:]([^/\s]+)\/([^/#?\s]+)/i)

  if (!match)
    return ''

  const owner = match[1]
  const name = match[2]?.replace(/\.git$/i, '')

  return owner && name ? `${owner}/${name}` : ''
}

function toFileName(packageName: string): string {
  return packageName
    .replace(/^@/, '')
    .replaceAll('/', '-')
}

export function normalizeHttpUrl(value: string | undefined): string | undefined {
  if (!value)
    return undefined

  try {
    const url = new URL(value.trim())
    return url.protocol === 'http:' || url.protocol === 'https:' ? value.trim() : undefined
  }
  catch {
    return undefined
  }
}

export function transformToCommunityProject(
  result: NpmSearchObject,
  discoveredAs: PluginDefinition,
): CollectedPlugin {
  const definition = PLUGIN_DEFINITIONS.find(definition =>
    definition.namePrefixes.some(prefix => result.package.name.startsWith(prefix)),
  ) ?? discoveredAs

  const { icon, type } = definition
  const github = extractGitHubRepository(result.package.links?.repository || '')
  const githubUrl = github ? `https://github.com/${github}` : undefined
  const homepage = normalizeHttpUrl(result.package.links.homepage)
    ?? (result.package.links.homepage ? githubUrl : undefined)
  const { monthly, weekly } = result.downloads

  const project = communityProjectSchema.parse({
    name: result.package.name,
    description: result.package.description ?? '',
    icon,
    category: 'plugin',
    types: [type],
    ...(result.package.keywords?.length ? { tags: result.package.keywords } : {}),
    source: {
      ...(github ? { github } : {}),
      npm: result.package.name,
    },
    links: {
      ...(githubUrl ? { github: githubUrl } : {}),
      npm: result.package.links.npm,
      ...(homepage ? { website: homepage } : {}),
    },
  })

  return {
    npmMetric: {
      packageName: result.package.name,
      downloadsMonthly: monthly,
      downloadsWeekly: weekly,
      updatedAt: new Date().toISOString(),
    },
    type,
    project,
  }
}

export async function collectPlugins(npmClient: NpmClient): Promise<CollectedPlugin[]> {
  console.log('Searching for plugins...')

  const seen = new Set<string>()
  const plugins: CollectedPlugin[] = []

  const addResults = (results: NpmSearchObject[], definition: PluginDefinition) => {
    for (const result of results) {
      if (seen.has(result.package.name))
        continue

      seen.add(result.package.name)
      plugins.push(transformToCommunityProject(result, definition))
    }
  }

  for (const definition of PLUGIN_DEFINITIONS) {
    for (const search of definition.searches) {
      console.log(`  Searching for "${search.query}"...`)
      const results = search.by === 'keyword'
        ? await npmClient.searchByKeyword(search.query)
        : await npmClient.searchByScope(search.query)
      addResults(results, definition)
    }
  }

  console.log(`Collected ${plugins.length} unique packages`)
  return plugins
}

export async function savePlugins(plugins: CollectedPlugin[], directory = DATA_DIR): Promise<void> {
  const stagedDirectory = `${directory}.next`
  const backupDirectory = `${directory}.previous`
  await rm(stagedDirectory, { recursive: true, force: true })
  await Promise.all(PLUGIN_DEFINITIONS.map(({ type }) => mkdir(join(stagedDirectory, type), { recursive: true })))

  const queue = new PQueue({ concurrency: 32 })
  try {
    await Promise.all(plugins.map(plugin => queue.add(async () => {
      const { project, type } = plugin
      const fileName = `${toFileName(project.name)}.ts`
      const existingPath = join(directory, type, fileName)
      const outputPath = join(stagedDirectory, type, fileName)

      // Existing generated files may still contain the legacy stats snapshot. Keep
      // it untouched during the transition so the first metrics-only run does not
      // produce a several-thousand-file diff. The database is the source of truth.
      const existingProject = existsSync(existingPath)
        ? await readProjectMeta(existingPath)
        : undefined
      const existingStats = existingProject?.stats
      const nextProject = {
        ...project,
        ...(existingStats ? { stats: existingStats } : {}),
      }
      const outputProject = existingProject
        && stableStringify(existingProject) === stableStringify(nextProject)
        ? existingProject
        : nextProject

      await writeFile(outputPath, renderProjectMetaSource(outputProject), 'utf8')
    })))

    await rm(backupDirectory, { recursive: true, force: true })
    await rename(directory, backupDirectory)

    try {
      await rename(stagedDirectory, directory)
    }
    catch (error) {
      await rename(backupDirectory, directory)
      throw error
    }

    await rm(backupDirectory, { recursive: true, force: true })
  }
  catch (error) {
    await rm(stagedDirectory, { recursive: true, force: true })
    throw error
  }

  console.log(`Saved ${plugins.length} plugin files to ${directory}`)
}

export async function savePluginMetrics(
  plugins: CollectedPlugin[],
  outputPath = METRICS_STAGING_PATH,
): Promise<void> {
  await mkdir(dirname(outputPath), { recursive: true })
  const metrics = plugins
    .map(plugin => plugin.npmMetric)
    .sort((left, right) => left.packageName.localeCompare(right.packageName))

  await writeFile(outputPath, `${JSON.stringify(metrics, null, 2)}\n`, 'utf8')
  console.log(`Saved ${metrics.length} plugin npm metrics to ${outputPath}`)
}

export async function main(): Promise<void> {
  console.log('Starting plugin collection...')

  const npmClient = new NpmClient()
  const plugins = await collectPlugins(npmClient)
  await savePlugins(plugins)
  await savePluginMetrics(plugins)

  console.log('\nCollection complete!')
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error('Collection failed:', error)
    process.exitCode = 1
  })
}
