// @env node

import { writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import PQueue from 'p-queue'

const NPM_SEARCH_ENDPOINT = 'https://registry.npmjs.org/-/v1/search'
const PAGE_SIZE = 250
const MAX_RETRIES = 10
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

function createProjectSource(data: NpmSearchObject, type: PluginDefinition['type']): string {
  const packageData = data.package
  const github = extractGitHubRepository(<string>packageData.links?.repository || '')

  const metaData = {
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
  return `import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta(${JSON.stringify(metaData, null, 2)})
`
}

function createSearchUrl(task: SearchTask): URL {
  const url = new URL(NPM_SEARCH_ENDPOINT)
  url.searchParams.set('text', `keywords:${task.definition.keyword}`)
  url.searchParams.set('size', String(PAGE_SIZE))
  url.searchParams.set('from', String(task.from))
  return url
}

function retryDelay(attempt: number): number {
  return Math.min(500 * 2 ** attempt, 5_000)
}

async function wait(milliseconds: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function requestSearchPage(task: SearchTask): Promise<NpmSearchResponse> {
  const url = createSearchUrl(task)

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          accept: 'application/json',
        },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT),
      })

      if (!response.ok)
        throw new Error(`npm search request failed with status ${response.status}`)

      return await response.json() as NpmSearchResponse
    }
    catch (error) {
      if (attempt === MAX_RETRIES)
        throw error

      console.warn(
        `[${task.definition.keyword}] Request from=${task.from} failed. Retrying ${attempt + 1}/${MAX_RETRIES}.`,
      )
      await wait(retryDelay(attempt))
    }
  }

  throw new Error('Unreachable npm search retry state')
}

async function writeSearchObjects(
  objects: NpmSearchObject[],
  definition: PluginDefinition,
  writtenFiles: Set<string>,
): Promise<number> {
  const targetDirectory = resolve(packageRoot, 'src', definition.directory)
  let createdCount = 0

  for (const data of objects) {
    const packageName = data.package.name

    if (!packageName) {
      console.warn(`[${definition.keyword}] Skipped a result without a package name.`)
      continue
    }

    if (!packageName.startsWith(definition.type)) {
      console.log(
        `[${definition.keyword}] -「${packageName}」 skipped because its name does not start with "${definition.type}"`,
      )
      continue
    }

    const filePath = resolve(targetDirectory, `${toFileName(packageName)}.ts`)

    if (writtenFiles.has(filePath))
      continue

    console.log(
      `[${definition.keyword}] -「${packageName}」 written successfully`,
    )
    await writeFile(filePath, createProjectSource(data, definition.type), 'utf8')
    writtenFiles.add(filePath)
    createdCount++
  }

  return createdCount
}

class PluginGenerator {
  private readonly queue = new PQueue({ concurrency: 30 })
  private readonly writtenFiles = new Set<string>()

  async generate(): Promise<void> {
    const searchResults = await Promise.all(
      pluginDefinitions.map(async definition => ({
        definition,
        objects: await this.collectSearchObjects(definition),
      })),
    )

    await this.queue.onIdle()

    for (const { definition, objects } of searchResults) {
      const createdCount = await writeSearchObjects(
        objects,
        definition,
        this.writtenFiles,
      )

      console.log(
        `[${definition.keyword}] ${objects.length} results collected, ${createdCount} files created.`,
      )
    }

    console.log(`Plugin metadata generation finished. ${this.writtenFiles.size} files created.`)
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
