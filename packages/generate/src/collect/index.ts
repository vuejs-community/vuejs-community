import type { CommunityProject } from '@vuejs-community/schema'
import type { NpmSearchObject, PluginType } from './types.js'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderProjectMetaSource } from '@vuejs-community/shared'
import { NpmClient } from './npm-client.js'
import { PLUGIN_KEYWORDS, PLUGIN_SCOPES } from './types.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(__dirname, '../../data/plugins')

const pluginIcons: Record<PluginType, string> = {
  'vite-plugin': 'logos:vite-icon',
  'rollup-plugin': 'logos:rollupjs',
  'rolldown-plugin': 'logos:rolldown-icon',
  'unplugin': 'icon:dark-unplugin',
}

export interface CollectedPlugin {
  project: CommunityProject
  type: PluginType
}

function normalizeRepositoryUrl(repository: string | undefined): string | undefined {
  if (!repository)
    return undefined

  let url = repository
  if (url.startsWith('git+'))
    url = url.slice(4)
  if (url.endsWith('.git'))
    url = url.slice(0, -4)
  if (url.startsWith('git://'))
    url = url.replace('git://', 'https://')
  if (url.startsWith('git@github.com:'))
    url = url.replace('git@github.com:', 'https://github.com/')

  try {
    const parsed = new URL(url)
    return parsed.protocol === 'http:' || parsed.protocol === 'https:' ? url : undefined
  }
  catch {
    return undefined
  }
}

function extractGitHubRepository(repository: string | undefined): string | undefined {
  const normalized = normalizeRepositoryUrl(repository)
  if (!normalized)
    return undefined

  const match = normalized.match(/^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/#?]+)/i)
  if (!match?.[1] || !match[2])
    return undefined

  return `${match[1]}/${match[2]}`
}

function resolvePluginType(name: string, discoveredAs: PluginType): PluginType {
  if (name.startsWith('@rollup/plugin-') || name.startsWith('rollup-plugin'))
    return 'rollup-plugin'
  if (name.startsWith('rolldown-plugin'))
    return 'rolldown-plugin'
  if (name.startsWith('vite-plugin'))
    return 'vite-plugin'
  if (name.startsWith('unplugin'))
    return 'unplugin'
  return discoveredAs
}

function toFileName(packageName: string): string {
  return packageName
    .replace(/^@/, '')
    .replaceAll('/', '-')
}

export function transformToCommunityProject(
  result: NpmSearchObject,
  discoveredAs: PluginType,
): CollectedPlugin {
  const type = resolvePluginType(result.package.name, discoveredAs)
  const repository = normalizeRepositoryUrl(result.package.links.repository)
  const github = extractGitHubRepository(repository)
  const homepage = normalizeRepositoryUrl(result.package.links.homepage)
  const { monthly, weekly } = result.downloads
  const hasDownloads = typeof monthly === 'number' && typeof weekly === 'number'

  return {
    type,
    project: {
      name: result.package.name,
      description: result.package.description ?? '',
      icon: pluginIcons[type],
      category: 'plugin',
      types: [type],
      ...(result.package.keywords?.length ? { tags: result.package.keywords } : {}),
      source: {
        ...(github ? { github } : {}),
        npm: result.package.name,
      },
      links: {
        ...(github ? { github: repository } : {}),
        npm: result.package.links.npm,
        ...(homepage ? { website: homepage } : {}),
      },
      ...(hasDownloads
        ? {
            stats: {
              downloads: { monthly, weekly },
            },
          }
        : {}),
    },
  }
}

export async function collectPlugins(npmClient: NpmClient): Promise<CollectedPlugin[]> {
  console.log('Searching for plugins...')

  const seen = new Set<string>()
  const plugins: CollectedPlugin[] = []

  const addResults = (results: NpmSearchObject[], discoveredAs: PluginType) => {
    for (const result of results) {
      if (seen.has(result.package.name))
        continue

      seen.add(result.package.name)
      plugins.push(transformToCommunityProject(result, discoveredAs))
    }
  }

  for (const keyword of PLUGIN_KEYWORDS) {
    console.log(`  Searching for "${keyword}"...`)
    addResults(await npmClient.searchByKeyword(keyword), keyword)
  }

  for (const scope of PLUGIN_SCOPES) {
    console.log(`  Searching for "${scope}"...`)
    addResults(await npmClient.searchByScope(scope), 'rollup-plugin')
  }

  console.log(`Collected ${plugins.length} unique packages`)
  return plugins
}

export async function savePlugins(plugins: CollectedPlugin[], directory = DATA_DIR): Promise<void> {
  await Promise.all(PLUGIN_KEYWORDS.map(type => mkdir(join(directory, type), { recursive: true })))

  for (const { project, type } of plugins) {
    const outputPath = join(directory, type, `${toFileName(project.name)}.ts`)
    await writeFile(outputPath, renderProjectMetaSource(project), 'utf8')
  }

  console.log(`Saved ${plugins.length} plugin files to ${directory}`)
}

export async function main(): Promise<void> {
  console.log('Starting plugin collection...')

  const npmClient = new NpmClient()
  const plugins = await collectPlugins(npmClient)
  await savePlugins(plugins)

  console.log('\nCollection complete!')
}
