import { readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, parse as ParseFile, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getGithubStar, getNpmPackageDownload, sleep } from '@vuejs-community/shared'
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
  maintainers: Record<string, string>[]
  compatibility: Record<string, unknown>[]
}

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

async function resolveModuleContent(module: NuxtModule): Promise<string> {
  const stars = await getGithubStar(module.repo)
  const [month, week] = await Promise.all([
    getNpmPackageDownload(module.npm, 'month'),
    getNpmPackageDownload(module.npm, 'week'),
  ])

  const pkg = JSON.stringify({
    name: module.name,
    description: module.description,
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
      stars,
      downloads: {
        monthly: month,
        weekly: week,
      },
    },
  }, null, 2)
  return `import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta(${pkg})`
}

async function generateModules() {
  console.log('Downloading the nuxt/modules repository...', packageRoot)

  const resolveNuxtModulesPath = resolve(packageRoot, 'nuxt-modules')

  const { dir } = await downloadTemplate('github:nuxt/modules', {
    dir: resolveNuxtModulesPath,
    force: true,
    forceClean: true,
  })

  console.log(dir)

  console.log(`Repository downloaded to: ${dir}`)

  try {
    const ymlFiles = await glob('modules/*.yml', {
      cwd: dir,
      absolute: true,
    })

    console.log(`Found ${ymlFiles.length} yml files\n`)

    for (const filePath of ymlFiles) {
      try {
        const content = await readFile(filePath, 'utf-8')
        const name = ParseFile(filePath).name
        const data = parse(content)
        console.log('moduleName', name)
        console.log(`File: ${filePath}`)
        console.log()
        const modulePath = resolve(packageRoot, `src/${name}.ts`)
        await writeFile(modulePath, await resolveModuleContent(data))
        await sleep(200)
      }
      catch (err) {
        console.error(`Failed to parse: ${filePath}`, err)
      }
    }

    console.log('All done!')
  }
  finally {
    console.log(`Deleting temporary directory: ${dir}`)
    await rm(dir, { recursive: true, force: true })
    console.log('Temporary directory deleted')
  }
}

generateModules().catch((error) => {
  console.error('generation failed.', error)
  process.exitCode = 1
})
