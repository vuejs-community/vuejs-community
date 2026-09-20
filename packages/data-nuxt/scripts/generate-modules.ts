import type { CommunityProject } from '@vuejs-community/schema'
import { existsSync } from 'node:fs'
import { copyFile, cp, mkdir, readFile, rename, rm } from 'node:fs/promises'
import { dirname, parse as ParseFile, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { communityProjectSchema } from '@vuejs-community/schema'
import { writeProjectMetaIfChanged } from '@vuejs-community/shared'
import { downloadTemplate } from 'giget'
import { glob } from 'glob'
import { parse } from 'yaml'

interface NuxtModule {
  name: string
  description?: string
  repo: string
  npm: string
  icon: string
  github: string
  website: string
  learn_more: string
  category: string
  type: string
}

interface ModuleEntry {
  fileName: string
  module: NuxtModule
}

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/** Local icon directory (the directory for the `icon` prefix in nuxt.config.ts). */
const appIconDir = resolve(packageRoot, '../../app/assets/icon')

/**
 * Checks whether the icon in the YAML file points to an actual SVG file in the
 * downloaded repository's icons/ directory. Returns its source path when valid,
 * or null otherwise.
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
 * Copies the module icon to app/assets/icon without overwriting an existing file,
 * then returns the `icon:xxx` name (without the .svg extension) used by
 * defineProjectMeta. Falls back to an empty string if validation or copying fails.
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

/**
 * Nuxt module repositories may include a git ref and package path for giget,
 * for example `owner/repo#main/packages/nuxt`. Metrics only need the GitHub
 * repository identifier, so keep the canonical `owner/repo` portion.
 */
export function normalizeGithubRepository(repository: string): string {
  const fragmentIndex = repository.indexOf('#')
  return (fragmentIndex === -1 ? repository : repository.slice(0, fragmentIndex)).trim()
}

function buildModuleProject(module: NuxtModule, icon: string): CommunityProject {
  return communityProjectSchema.parse({
    name: module.name,
    // Some upstream YAML files omit description. Use an empty string because
    // JSON.stringify drops keys whose values are undefined.
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
      github: normalizeGithubRepository(module.repo),
      npm: module.npm,
    },

  })
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

function deduplicateModules(entries: ModuleEntry[]): ModuleEntry[] {
  const unique = new Map<string, ModuleEntry>()

  for (const entry of entries) {
    const existing = unique.get(entry.module.name)
    if (!existing) {
      unique.set(entry.module.name, entry)
      continue
    }

    const existingSource = `${normalizeGithubRepository(existing.module.repo)}:${existing.module.npm}`
    const candidateSource = `${normalizeGithubRepository(entry.module.repo)}:${entry.module.npm}`
    if (existingSource !== candidateSource) {
      throw new Error(
        `Conflicting Nuxt modules named "${entry.module.name}": ${existing.fileName}.yml and ${entry.fileName}.yml`,
      )
    }

    const existingDescription = existing.module.description?.trim() ?? ''
    const candidateDescription = entry.module.description?.trim() ?? ''
    const preferred = candidateDescription.length === existingDescription.length
      ? (entry.fileName.localeCompare(existing.fileName) < 0 ? entry : existing)
      : (candidateDescription.length > existingDescription.length ? entry : existing)
    const skipped = preferred === entry ? existing : entry

    unique.set(entry.module.name, preferred)
    console.warn(`[duplicate] ${entry.module.name}: kept ${preferred.fileName}.yml, skipped ${skipped.fileName}.yml`)
  }

  return [...unique.values()]
}

async function replaceDirectory(currentPath: string, stagedPath: string): Promise<void> {
  const backupPath = `${currentPath}.previous`
  await rm(backupPath, { recursive: true, force: true })
  await rename(currentPath, backupPath)

  try {
    await rename(stagedPath, currentPath)
  }
  catch (error) {
    await rename(backupPath, currentPath)
    throw error
  }

  await rm(backupPath, { recursive: true, force: true })
}

async function pruneStaleModules(entries: ModuleEntry[], outputDir: string): Promise<number> {
  const expectedFiles = new Set(entries.map(entry => `${entry.fileName}.ts`))
  const generatedFiles = await glob('*.ts', {
    cwd: outputDir,
    absolute: true,
  })

  let deleted = 0
  for (const filePath of generatedFiles) {
    const fileName = ParseFile(filePath).base
    if (expectedFiles.has(fileName))
      continue

    await rm(filePath)
    console.log(`[deleted] ${fileName}`)
    deleted++
  }

  return deleted
}

async function writeModules(entries: ModuleEntry[], repoDir: string, outputDir: string) {
  const results = { updated: 0, unchanged: 0, failed: 0 }

  for (const { fileName, module } of entries) {
    const modulePath = resolve(outputDir, `${fileName}.ts`)

    try {
      const icon = await syncModuleIcon(repoDir, module.icon)

      const project = buildModuleProject(module, icon)

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

    const entries = deduplicateModules(await collectModules(dir))
    const outputDir = resolve(packageRoot, 'src')
    const stagedOutputDir = `${outputDir}.next`
    await rm(stagedOutputDir, { recursive: true, force: true })
    if (existsSync(outputDir))
      await cp(outputDir, stagedOutputDir, { recursive: true })
    else
      await mkdir(stagedOutputDir, { recursive: true })

    const results = await writeModules(entries, dir, stagedOutputDir)
    if (results.failed > 0) {
      await rm(stagedOutputDir, { recursive: true, force: true })
      throw new Error(`Failed to generate ${results.failed} Nuxt module files.`)
    }

    const deleted = await pruneStaleModules(entries, stagedOutputDir)
    await replaceDirectory(outputDir, stagedOutputDir)

    console.log(`All done! modules: ${entries.length}, updated: ${results.updated}, unchanged: ${results.unchanged}, deleted: ${deleted}, failed: ${results.failed}`)
  }
  finally {
    console.log(`Deleting temporary directory: ${dir}`)
    await rm(dir, { recursive: true, force: true })
    console.log('Temporary directory deleted')
  }
}

// Run the full generation process only when executed directly. Imports expose
// only the helper functions above.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  generateModules().catch((error) => {
    console.error('generation failed.', error)
    process.exitCode = 1
  })
}
