import type { CommunityProject } from '@vuejs-community/schema'
import type { NpmSearchObject, PluginDefinition, PluginType } from './types.js'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderProjectMetaSource } from '@vuejs-community/shared'
import { NpmClient } from './npm-client.js'
import { PLUGIN_DEFINITIONS } from './types.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_DIR = join(__dirname, '../../data/plugins')

export interface CollectedPlugin {
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

export function transformToCommunityProject(
  result: NpmSearchObject,
  discoveredAs: PluginDefinition,
): CollectedPlugin {
  const definition = PLUGIN_DEFINITIONS.find(definition =>
    definition.namePrefixes.some(prefix => result.package.name.startsWith(prefix)),
  ) ?? discoveredAs

  const { icon, type } = definition
  const github = extractGitHubRepository(result.package.links?.repository || '')
  const { monthly, weekly } = result.downloads

  return {
    type,
    project: {
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
        ...(github ? { github: `https://github.com/${github}` } : {}),
        npm: result.package.links.npm,
        ...(result.package.links.homepage ? { website: result.package.links.homepage } : {}),
      },
      stats: {
        downloads: { monthly, weekly },
      },
    },
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
  await Promise.all(PLUGIN_DEFINITIONS.map(({ type }) => mkdir(join(directory, type), { recursive: true })))

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
