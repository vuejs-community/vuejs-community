import type { CommunityProject } from '@vuejs-community/schema'
import type { Database } from 'db0'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { createDatabase } from 'db0'
import nodeSqliteConnector from 'db0/connectors/node-sqlite'
import { glob } from 'glob'

interface NormalizedProject {
  name: string
  description: string
  icon: CommunityProject['icon']
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
}

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = resolve(scriptDirectory, '../')
const defaultSourceRoots = [
  'packages/data-ui/src',
  'packages/data-plugins/src',
  'packages/data-component/src',
  'packages/data-hooks/src',
  'packages/data-nuxt/src',
  'packages/data-uniapp/src',
  'packages/data-admin/src',
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
    icon: project.icon,
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

async function loadProjects(sourceRoots: string[]): Promise<ResolvedProject> {
  const sourceCounts = new Map<string, number>()
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

  for (const { path: sourceFile, source } of sourceFiles) {
    const importedModule = await import(pathToFileURL(sourceFile).href)
    const rawProject = importedModule.default as CommunityProject

    const project = normalizeProject(rawProject, source)

    if (project.types.length === 0)
      throw new Error(`Project "${project.name}" in ${sourceFile} has no types.`)

    projects.push(project)
  }

  return { projects, sourceCounts }
}

async function createSchema(database: Database): Promise<void> {
  await database.exec(`
    PRAGMA foreign_keys = ON;
    PRAGMA journal_mode = DELETE;
    PRAGMA synchronous = FULL;

    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      icon TEXT NOT NULL,
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

    CREATE INDEX IF NOT EXISTS projects_name_idx
      ON projects (name);

    CREATE TABLE IF NOT EXISTS "project-meta" (
      project_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      "values" TEXT NOT NULL,
      type TEXT NOT NULL CHECK (type IN ('types', 'tags', 'filter')),
      PRIMARY KEY (project_id, type, "values"),
      FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
    ) STRICT;

    CREATE INDEX IF NOT EXISTS project_meta_type_values_idx
      ON "project-meta" (type, "values");

    CREATE INDEX IF NOT EXISTS project_meta_name_idx
      ON "project-meta" (name);
  `)
}

async function insertProjects(database: Database, projects: NormalizedProject[]): Promise<void> {
  const insertProject = database.prepare(`
    INSERT INTO projects (
      id,
      name,
      description,
      icon,
      category,
      source,
      github,
      npm,
      website,
      downloads_monthly,
      downloads_weekly,
      stars
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)
  const insertMeta = database.prepare(`
    INSERT INTO "project-meta" (project_id, name, "values", type)
    VALUES (?, ?, ?, ?)
  `)

  await database.exec('BEGIN IMMEDIATE')

  try {
    for (const [index, project] of projects.entries()) {
      const projectId = index + 1

      await insertProject.run(
        projectId,
        project.name,
        project.description,
        project.icon,
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
        await insertMeta.run(projectId, project.name, type, 'types')

      for (const tag of project.tags)
        await insertMeta.run(projectId, project.name, tag, 'tags')

      for (const filter of project.filter)
        await insertMeta.run(projectId, project.name, filter, 'filter')
    }

    await database.exec('COMMIT')
  }
  catch (error) {
    await database.exec('ROLLBACK')
    throw error
  }
}

async function buildDatabase(options: BuildOptions): Promise<void> {
  const { projects, sourceCounts } = await loadProjects(options.sourceRoots)

  mkdirSync(dirname(options.outputPath), { recursive: true })
  rmSync(options.outputPath, { force: true })
  writeFileSync(options.outputPath, '')

  const database = createDatabase(nodeSqliteConnector({ path: options.outputPath }))

  try {
    await createSchema(database)
    await insertProjects(database, projects)

    await database.exec('PRAGMA optimize')

    for (const [sourceRoot, count] of sourceCounts) {
      const relativeRoot = sourceRoot.replace(`${repositoryRoot}/`, '')
      console.log(`${relativeRoot}: ${count} project files`)
    }

    console.log(`Wrote ${projects.length} projects.`)
    console.log(`Database: ${options.outputPath}`)
  }
  finally {
    await database.dispose()
  }
}

await buildDatabase(readOptions())
