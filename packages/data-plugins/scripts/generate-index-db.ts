import type { CommunityProject } from '@vue-community/schema'
import type { Database } from 'db0'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createDatabase } from 'db0'
import nodeSqliteConnector from 'db0/connectors/node-sqlite'
import { glob } from 'glob'

interface NormalizedProject {
  name: string
  description: string
  category: string
  source: string
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

interface ResolvedProject {
  projects: NormalizedProject[]
  sourceCounts: Map<string, number>
  warnings: string[]
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

function normalizeProject(project: CommunityProject, source: string): NormalizedProject {
  return {
    name: project.name,
    description: project.description ?? '',
    category: project.category,
    source,
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

async function loadProjects(sourceRoots: string[]): Promise<ResolvedProject> {
  const sourceCounts = new Map<string, number>()
  const warnings: string[] = []
  const sourceFiles: Array<{ path: string, source: string }> = []

  for (const sourceRoot of sourceRoots) {
    const source = basename(dirname(sourceRoot)) as string
    const files = (await glob('**/*.ts', {
      cwd: sourceRoot,
      nodir: true,
    }))
      .filter(file => !file.endsWith('.d.ts'))
      .map(file => resolve(sourceRoot, file))

    sourceCounts.set(sourceRoot, files.length)
    sourceFiles.push(...files.map(path => ({ path, source })))
  }

  sourceFiles.sort((left, right) => left.path.localeCompare(right.path))

  const projects: NormalizedProject[] = []
  const projectSources = new Map<string, string>()

  for (const { path: sourceFile, source } of sourceFiles) {
    const importedModule = await import(pathToFileURL(sourceFile).href)
    const rawProject = importedModule.default as CommunityProject

    const project = normalizeProject(rawProject, source)
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

async function createSchema(database: Database): Promise<void> {
  await database.exec(`
    PRAGMA foreign_keys = ON;
    PRAGMA journal_mode = DELETE;
    PRAGMA synchronous = FULL;

    CREATE TABLE IF NOT EXISTS projects (
      name TEXT PRIMARY KEY NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      source TEXT NOT NULL,
      github TEXT,
      npm TEXT,
      website TEXT,
      downloads_monthly INTEGER
        CHECK (downloads_monthly IS NULL OR downloads_monthly >= 0),
      downloads_weekly INTEGER
        CHECK (downloads_weekly IS NULL OR downloads_weekly >= 0),
      stars INTEGER CHECK (stars IS NULL OR stars >= 0)
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS projects_name_idx
      ON projects (name);

    CREATE TABLE IF NOT EXISTS "project-meta" (
      name TEXT NOT NULL,
      "values" TEXT NOT NULL,
      type TEXT NOT NULL CHECK (type IN ('category', 'tags', 'filter')),
      PRIMARY KEY (name, type, "values"),
      FOREIGN KEY (name) REFERENCES projects(name) ON DELETE CASCADE
    ) STRICT;

    CREATE INDEX IF NOT EXISTS project_meta_type_values_idx
      ON "project-meta" (type, "values");
  `)

  const columns = await database.prepare('PRAGMA table_info(projects)').all() as Array<{
    name: string
  }>

  if (!columns.some(column => column.name === 'source'))
    await database.exec(`ALTER TABLE projects ADD COLUMN source TEXT NOT NULL DEFAULT ''`)
}

async function insertProjects(database: Database, projects: NormalizedProject[]): Promise<void> {
  const insertProject = database.prepare(`
    INSERT INTO projects (
      name,
      description,
      category,
      source,
      github,
      npm,
      website,
      downloads_monthly,
      downloads_weekly,
      stars
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(name) DO UPDATE SET
      description = excluded.description,
      category = excluded.category,
      source = excluded.source,
      github = excluded.github,
      npm = excluded.npm,
      website = excluded.website,
      downloads_monthly = excluded.downloads_monthly,
      downloads_weekly = excluded.downloads_weekly,
      stars = excluded.stars
  `)
  const deleteMeta = database.prepare(`
    DELETE FROM "project-meta"
    WHERE name = ?
  `)
  const insertMeta = database.prepare(`
    INSERT INTO "project-meta" (name, "values", type)
    VALUES (?, ?, ?)
    ON CONFLICT(name, type, "values") DO NOTHING
  `)

  await database.exec('BEGIN IMMEDIATE')

  try {
    for (const project of projects) {
      await insertProject.run(
        project.name,
        project.description,
        project.category,
        project.source,
        project.github,
        project.npm,
        project.website,
        project.downloadsMonthly,
        project.downloadsWeekly,
        project.stars,
      )

      await deleteMeta.run(project.name)
      await insertMeta.run(project.name, project.category, 'category')

      for (const tag of project.tags)
        await insertMeta.run(project.name, tag, 'tags')

      for (const filter of project.filter)
        await insertMeta.run(project.name, filter, 'filter')
    }

    await database.exec('COMMIT')
  }
  catch (error) {
    await database.exec('ROLLBACK')
    throw error
  }
}

async function verifyDatabase(database: Database, expectedProjects: number): Promise<{
  metadata: number
  projects: number
}> {
  const integrity = await database.prepare('PRAGMA integrity_check').get() as Record<string, unknown>
  const foreignKeyErrors = await database.prepare('PRAGMA foreign_key_check').all()
  const projectCount = await database.prepare('SELECT COUNT(*) AS count FROM projects').get() as {
    count: number
  }
  const metadataCount = await database
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
  mkdirSync(dirname(options.outputPath), { recursive: true })

  if (!existsSync(options.outputPath))
    writeFileSync(options.outputPath, '')

  const { projects, sourceCounts, warnings } = await loadProjects(options.sourceRoots)
  const database = createDatabase(nodeSqliteConnector({ path: options.outputPath }))

  try {
    await createSchema(database)
    await insertProjects(database, projects)
    const counts = await verifyDatabase(database, projects.length)

    await database.exec('PRAGMA optimize')

    for (const [sourceRoot, count] of sourceCounts) {
      const relativeRoot = sourceRoot.replace(`${repositoryRoot}/`, '')
      console.log(`${relativeRoot}: ${count} project files`)
    }

    for (const warning of warnings)
      console.warn(`Warning: ${warning.replace(`${repositoryRoot}/`, '')}`)

    console.log(`Wrote ${counts.projects} projects and ${counts.metadata} metadata rows.`)
    console.log(`Database: ${options.outputPath}`)
  }
  finally {
    await database.dispose()
  }
}

await buildDatabase(readOptions())
