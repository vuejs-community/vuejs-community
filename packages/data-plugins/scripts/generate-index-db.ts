import type { CommunityProject } from '@vue-community/schema'
import { renameSync, rmSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import * as process from 'node:process'
import { DatabaseSync } from 'node:sqlite'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { glob } from 'glob'

interface NormalizedProject {
  name: string
  description: string
  category: string
  tags: string[]
  filter: string[]
  github: string
  npm: string
  website: string
  downloadsMonthly: number
  downloadsWeekly: number
  stars: number
}

interface BuildOptions {
  outputPath: string
  sourceRoots: string[]
}

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = resolve(scriptDirectory, '../../../')
const defaultSourceRoots = [
  'packages/data-ui/src',
  'packages/data-plugins/src',
  'packages/data-component/src',
  'packages/data-hooks/src',
  'packages/data-nuxt/src',
]

function readOptions(): BuildOptions {
  const outputPath = resolve(repositoryRoot, 'public/index.db')

  return {
    outputPath,
    sourceRoots: defaultSourceRoots.map(root => resolve(repositoryRoot, root)),
  }
}

function normalizeProject(project: CommunityProject): NormalizedProject {
  console.log(project)
  return {
    name: project.name,
    description: project.description,
    category: project.category,
    tags: project.tags,
    filter: project.filter ?? [],
    github: project.links?.github || '',
    npm: project.links?.npm || '',
    website: project.links?.website || '',
    downloadsMonthly: project.stats?.downloads?.monthly || 0,
    downloadsWeekly: project.stats?.downloads?.weekly || 0,
    stars: project.stats?.stars ?? 0,
  }
}

async function loadProjects(sourceRoots: string[]): Promise<{
  projects: NormalizedProject[]
  sourceCounts: Map<string, number>
  warnings: string[]
}> {
  console.log('source', sourceRoots)
  const sourceCounts = new Map<string, number>()
  const warnings: string[] = []
  const sourceFiles: string[] = []

  for (const sourceRoot of sourceRoots) {
    const files = (await glob('**/*.ts', {
      cwd: sourceRoot,
      nodir: true,
    }))
      .filter(file => !file.endsWith('.d.ts'))
      .map(file => resolve(sourceRoot, file))

    sourceCounts.set(sourceRoot, files.length)
    sourceFiles.push(...files)
  }

  sourceFiles.sort((left, right) => left.localeCompare(right))

  const projects: NormalizedProject[] = []
  const projectSources = new Map<string, string>()

  for (const sourceFile of sourceFiles) {
    const importedModule = await import(pathToFileURL(sourceFile).href)
    const rawProject = importedModule.default as CommunityProject

    const project = normalizeProject(rawProject)
    const existingSource = projectSources.get(project.name)

    if (existingSource) {
      throw new Error(
        `Duplicate project name "${project.name}" in ${existingSource} and ${sourceFile}.`,
      )
    }

    projectSources.set(project.name, sourceFile)
    projects.push(project)
  }

  return { projects, sourceCounts, warnings }
}

function createSchema(database: DatabaseSync): void {
  database.exec(`
    PRAGMA foreign_keys = ON;
    PRAGMA journal_mode = DELETE;
    PRAGMA synchronous = FULL;

    CREATE TABLE projects (
      name TEXT PRIMARY KEY NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      github TEXT,
      npm TEXT,
      website TEXT,
      downloads_monthly INTEGER
        CHECK (downloads_monthly IS NULL OR downloads_monthly >= 0),
      downloads_weekly INTEGER
        CHECK (downloads_weekly IS NULL OR downloads_weekly >= 0),
      stars INTEGER CHECK (stars IS NULL OR stars >= 0)
    ) STRICT;

    CREATE TABLE "project-meta" (
      name TEXT NOT NULL,
      "values" TEXT NOT NULL,
      type TEXT NOT NULL CHECK (type IN ('category', 'tags', 'filter')),
      PRIMARY KEY (name, type, "values"),
      FOREIGN KEY (name) REFERENCES projects(name) ON DELETE CASCADE
    ) STRICT;

    CREATE INDEX project_meta_type_values_idx
      ON "project-meta" (type, "values");
  `)
}

function insertProjects(database: DatabaseSync, projects: NormalizedProject[]): void {
  const insertProject = database.prepare(`
    INSERT INTO projects (
      name,
      description,
      category,
      github,
      npm,
      website,
      downloads_monthly,
      downloads_weekly,
      stars
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)
  const insertMeta = database.prepare(`
    INSERT INTO "project-meta" (name, "values", type)
    VALUES (?, ?, ?)
  `)

  database.exec('BEGIN IMMEDIATE')

  try {
    for (const project of projects) {
      insertProject.run(
        project.name,
        project.description,
        project.category,
        project.github,
        project.npm,
        project.website,
        project.downloadsMonthly,
        project.downloadsWeekly,
        project.stars,
      )

      insertMeta.run(project.name, project.category, 'category')

      for (const tag of project.tags)
        insertMeta.run(project.name, tag, 'tags')

      for (const filter of project.filter)
        insertMeta.run(project.name, filter, 'filter')
    }

    database.exec('COMMIT')
  }
  catch (error) {
    database.exec('ROLLBACK')
    throw error
  }
}

function verifyDatabase(database: DatabaseSync, expectedProjects: number): {
  metadata: number
  projects: number
} {
  const integrity = database.prepare('PRAGMA integrity_check').get() as Record<string, unknown>
  const foreignKeyErrors = database.prepare('PRAGMA foreign_key_check').all()
  const projectCount = database.prepare('SELECT COUNT(*) AS count FROM projects').get() as {
    count: number
  }
  const metadataCount = database
    .prepare('SELECT COUNT(*) AS count FROM "project-meta"')
    .get() as { count: number }

  if (integrity.integrity_check !== 'ok')
    throw new Error(`SQLite integrity check failed: ${JSON.stringify(integrity)}`)

  if (foreignKeyErrors.length > 0)
    throw new Error(`SQLite foreign key check failed: ${JSON.stringify(foreignKeyErrors)}`)

  if (projectCount.count !== expectedProjects) {
    throw new Error(
      `Expected ${expectedProjects} projects, but wrote ${projectCount.count}.`,
    )
  }

  return {
    projects: projectCount.count,
    metadata: metadataCount.count,
  }
}

async function buildDatabase(options: BuildOptions): Promise<void> {
  const { projects, sourceCounts, warnings } = await loadProjects(options.sourceRoots)

  const temporaryPath = join(
    dirname(options.outputPath),
    `.${basename(options.outputPath)}.${process.pid}.tmp`,
  )

  let database: DatabaseSync | undefined

  try {
    database = new DatabaseSync(temporaryPath)
    createSchema(database)
    insertProjects(database, projects)
    const counts = verifyDatabase(database, projects.length)

    database.exec('PRAGMA optimize')
    database.close()
    database = undefined

    renameSync(temporaryPath, options.outputPath)

    for (const [sourceRoot, count] of sourceCounts) {
      const relativeRoot = sourceRoot.replace(`${repositoryRoot}/`, '')
      console.log(`${relativeRoot}: ${count} project files`)
    }

    for (const warning of warnings)
      console.warn(`Warning: ${warning.replace(`${repositoryRoot}/`, '')}`)

    console.log(`Wrote ${counts.projects} projects and ${counts.metadata} metadata rows.`)
    console.log(`Database: ${options.outputPath}`)
  }
  catch (error) {
    database?.close()
    rmSync(temporaryPath, { force: true })
    throw error
  }
}

// buildDatabase(readOptions(process.argv.slice(2))).then(() => {
//   process.exit(0)
// }).catch((error) => {
//   console.error(error)
//   process.exit(1)
// })

console.log(await buildDatabase(readOptions()))
