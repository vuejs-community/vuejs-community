import type { Database } from 'db0'
import type { CommunityProject } from '~~/packages/schema'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
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
  types: string[]
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
const repositoryRoot = resolve(scriptDirectory, '../')
const defaultSourceRoots = [
  'packages/data-ui/src',
  'packages/data-plugins/src',
  'packages/data-component/src',
  'packages/data-hooks/src',
  'packages/data-nuxt/src',
]

function readOptions(): BuildOptions {
  const outputPath = resolve(repositoryRoot, 'server/assets/index.db')

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
    types: [...new Set(project.types)],
    tags: [...new Set(project?.tags || [])],
    filter: [...new Set(project.filter ?? [])],
    github: project.links?.github || '',
    npm: project.links?.npm || '',
    website: project.links?.website || '',
    downloadsMonthly: project.stats?.downloads?.monthly || 0,
    downloadsWeekly: project.stats?.downloads?.weekly || 0,
    stars: project.stats?.stars ?? 0,
  }
}

function mergeProject(target: NormalizedProject, incoming: NormalizedProject): void {
  target.types = [...new Set([...target.types, ...incoming.types])]
  target.tags = [...new Set([...target.tags, ...incoming.tags])]
  target.filter = [...new Set([...target.filter, ...incoming.filter])]

  if (!target.description)
    target.description = incoming.description
  if (!target.github)
    target.github = incoming.github
  if (!target.npm)
    target.npm = incoming.npm
  if (!target.website)
    target.website = incoming.website

  target.downloadsMonthly = Math.max(target.downloadsMonthly, incoming.downloadsMonthly)
  target.downloadsWeekly = Math.max(target.downloadsWeekly, incoming.downloadsWeekly)
  target.stars = Math.max(target.stars, incoming.stars)
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

  const projectsByName = new Map<string, NormalizedProject>()
  const projectNameFiles = new Map<string, string[]>()

  for (const { path: sourceFile, source } of sourceFiles) {
    const importedModule = await import(pathToFileURL(sourceFile).href)
    const rawProject = importedModule.default as CommunityProject

    const project = normalizeProject(rawProject, source)
    const existing = projectsByName.get(project.name)

    if (existing) {
      mergeProject(existing, project)
      projectNameFiles.get(project.name)?.push(sourceFile)
      continue
    }

    projectsByName.set(project.name, project)
    projectNameFiles.set(project.name, [sourceFile])
  }

  for (const [name, files] of projectNameFiles) {
    if (files.length > 1)
      warnings.push(`Duplicate project name "${name}" merged from ${files.join(', ')}.`)
  }

  return { projects: [...projectsByName.values()], sourceCounts, warnings }
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
      type TEXT NOT NULL CHECK (type IN ('types', 'tags', 'filter')),
      PRIMARY KEY (name, type, "values"),
      FOREIGN KEY (name) REFERENCES projects(name) ON DELETE CASCADE
    ) STRICT;

    CREATE INDEX IF NOT EXISTS project_meta_type_values_idx
      ON "project-meta" (type, "values");
  `)
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
  `)
  const insertMeta = database.prepare(`
    INSERT INTO "project-meta" (name, "values", type)
    VALUES (?, ?, ?)
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

      for (const type of project.types)
        await insertMeta.run(project.name, type, 'types')

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
  const missingTypes = await database.prepare(`
    SELECT COUNT(*) AS count
    FROM projects
    WHERE NOT EXISTS (
      SELECT 1
      FROM "project-meta"
      WHERE "project-meta".name = projects.name
        AND "project-meta".type = 'types'
    )
  `).get() as { count: number }

  if (integrity.integrity_check !== 'ok')
    throw new Error(`SQLite integrity check failed: ${JSON.stringify(integrity)}`)

  if (foreignKeyErrors.length > 0)
    throw new Error(`SQLite foreign key check failed: ${JSON.stringify(foreignKeyErrors)}`)

  if (projectCount.count !== expectedProjects) {
    throw new Error(
      `Expected ${expectedProjects} projects, but wrote ${projectCount.count}.`,
    )
  }

  if (missingTypes.count > 0)
    throw new Error(`${missingTypes.count} projects are missing required types metadata.`)

  return {
    projects: projectCount.count,
    metadata: metadataCount.count,
  }
}

async function buildDatabase(options: BuildOptions): Promise<void> {
  const { projects, sourceCounts, warnings } = await loadProjects(options.sourceRoots)

  mkdirSync(dirname(options.outputPath), { recursive: true })
  rmSync(options.outputPath, { force: true })
  writeFileSync(options.outputPath, '')

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
      console.warn(`Warning: ${warning.replaceAll(`${repositoryRoot}/`, '')}`)

    console.log(`Wrote ${counts.projects} projects and ${counts.metadata} metadata rows.`)
    console.log(`Database: ${options.outputPath}`)
  }
  finally {
    await database.dispose()
  }
}

// eslint-disable-next-line antfu/no-top-level-await
await buildDatabase(readOptions())
