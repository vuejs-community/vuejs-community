// @env node

import type { CommunityProject } from '@vuejs-community/schema'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { fetchWithRetry, writeProjectMetaIfChanged } from '@vuejs-community/shared'
import { ofetch } from 'ofetch'
import PQueue from 'p-queue'

const NPM_SEARCH_ENDPOINT = 'https://registry.npmjs.org/-/v1/search'
const PAGE_SIZE = 250
/** Total attempts per page request (1 initial + retries). Only transient failures retry. */
const MAX_ATTEMPTS = 4
const REQUEST_TIMEOUT = 30_000

interface PluginDefinition {
  keyword: string
  directory: string
  packageNamePrefix: string
  type: 'vite-plugin' | 'rollup-plugin' | 'rolldown-plugin' | 'unplugin'
}

interface SearchTask {
  definition: PluginDefinition
  from: number
}

interface NpmPackageLinks {
  npm?: string
  repository?: string
}

interface NpmPackage {
  description: string
  keywords: string[]
  links: NpmPackageLinks
  name: string
  version: string
}

interface NpmSearchObject {
  downloads: {
    monthly: number
    weekly: number
  }
  package: NpmPackage
}

interface NpmSearchResponse {
  objects: NpmSearchObject[]
}

interface ProjectWithVersion extends CommunityProject {
  version: string
}

interface WriteCounts {
  created: number
  updated: number
  unchanged: number
}

const pluginDefinitions: PluginDefinition[] = [
  {
    keyword: 'vite-plugin',
    directory: 'vite',
    packageNamePrefix: 'vite-plugin',
    type: 'vite-plugin',
  },
  {
    keyword: 'rollup-plugin',
    directory: 'rollup',
    packageNamePrefix: 'rollup-plugin',
    type: 'rollup-plugin',
  },
  {
    keyword: 'rolldown-plugin',
    directory: 'rolldown',
    packageNamePrefix: 'rolldown-plugin',
    type: 'rolldown-plugin',
  },
  {
    keyword: 'unplugin',
    directory: 'unplugin',
    packageNamePrefix: 'unplugin',
    type: 'unplugin',
  },
  {
    keyword: '@rollup/plugin-',
    directory: 'rollup',
    packageNamePrefix: '@rollup/plugin-',
    type: 'rollup-plugin',
  },
]

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

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

function createProjectData(data: NpmSearchObject, type: PluginDefinition['type']): ProjectWithVersion {
  const packageData = data.package
  const github = extractGitHubRepository(<string>packageData.links?.repository || '')

  return {
    name: packageData.name,
    description: packageData.description,
    version: packageData.version,
    category: 'plugin',
    tags: packageData.keywords,
    types: [type],
    links: {
      github: `https://github.com/${github}`,
      npm: packageData.links.npm ?? '',
    },
    stats: {
      downloads: data.downloads,
    },
  }
}

function createSearchUrl(task: SearchTask): string {
  const url = new URL(NPM_SEARCH_ENDPOINT)
  url.searchParams.set('text', `keywords:${task.definition.keyword}`)
  url.searchParams.set('size', String(PAGE_SIZE))
  url.searchParams.set('from', String(task.from))
  return url.toString()
}

async function requestSearchPage(task: SearchTask): Promise<NpmSearchResponse> {
  const result = await fetchWithRetry(async () => {
    // ofetch throws on non-2xx with a statusCode attached, which is what the shared
    // retry logic uses to tell transient failures from permanent ones.
    const data = await ofetch<NpmSearchResponse>(createSearchUrl(task), { retry: 0, timeout: REQUEST_TIMEOUT })
    if (!data.objects)
      throw new Error(`invalid search payload at from=${task.from}`)
    return data
  }, { attempts: MAX_ATTEMPTS, initialBackoffMs: 1000 })

  if (!result)
    throw new Error(`npm search request failed at from=${task.from} after ${MAX_ATTEMPTS} attempts`)
  return result
}

async function writeSearchObjects(
  objects: NpmSearchObject[],
  definition: PluginDefinition,
  writtenFiles: Set<string>,
): Promise<WriteCounts> {
  const targetDirectory = resolve(packageRoot, 'src', definition.directory)
  const counts: WriteCounts = { created: 0, updated: 0, unchanged: 0 }

  for (const data of objects) {
    const packageName = data.package.name

    if (!packageName) {
      console.warn(`[${definition.keyword}] Skipped a result without a package name.`)
      continue
    }

    if (!packageName.startsWith(definition.packageNamePrefix)) {
      console.log(
        `[${definition.keyword}] -「${packageName}」 skipped because its name does not start with "${definition.packageNamePrefix}"`,
      )
      continue
    }

    const filePath = resolve(targetDirectory, `${toFileName(packageName)}.ts`)

    // First definition that reaches a path owns it, so「@rollup/plugin-x」never clobbers「rollup-plugin-x」.
    if (writtenFiles.has(filePath))
      continue

    const project = createProjectData(data, definition.type)
    const result = await writeProjectMetaIfChanged(filePath, project)
    writtenFiles.add(filePath)

    if (result === 'unchanged') {
      counts.unchanged++
      continue
    }

    console.log(
      `[${definition.keyword}] -「${packageName}」 ${result}`,
    )
    counts[result]++
  }

  return counts
}

class PluginGenerator {
  /** The search API throttles bursts, so requests are rate limited to 3/second. */
  private readonly queue = new PQueue({ concurrency: 3, interval: 1000, intervalCap: 3 })
  private readonly writtenFiles = new Set<string>()

  async generate(): Promise<void> {
    const searchResults = await Promise.all(
      pluginDefinitions.map(async definition => ({
        definition,
        objects: await this.collectSearchObjects(definition),
      })),
    )

    await this.queue.onIdle()

    let created = 0
    let updated = 0
    let unchanged = 0

    for (const { definition, objects } of searchResults) {
      const counts = await writeSearchObjects(
        objects,
        definition,
        this.writtenFiles,
      )

      created += counts.created
      updated += counts.updated
      unchanged += counts.unchanged

      console.log(
        `[${definition.keyword}] ${objects.length} results collected, ${counts.created} created, ${counts.updated} updated, ${counts.unchanged} unchanged.`,
      )
    }

    console.log(`Plugin metadata generation finished. ${created} created, ${updated} updated, ${unchanged} unchanged, ${this.writtenFiles.size} files total.`)
  }

  private async collectSearchObjects(definition: PluginDefinition): Promise<NpmSearchObject[]> {
    const objects: NpmSearchObject[] = []
    let from = 0

    console.log(
      `[${definition.keyword}] started`,
    )
    while (true) {
      const task: SearchTask = {
        definition,
        from,
      }
      const response = await this.queue.add(() => requestSearchPage(task))

      if (response.objects.length === 0) {
        console.log(`[${definition.keyword}] Finished at from=${from}.`)
        break
      }

      objects.push(...response.objects)

      console.log(
        `[${definition.keyword}] Collected from=${from}: ${response.objects.length} results.`,
      )

      from += PAGE_SIZE
    }

    return objects
  }
}

try {
  await new PluginGenerator().generate()
}
catch (error) {
  console.error('Plugin metadata generation failed.', error)
  process.exitCode = 1
}
