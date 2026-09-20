import { communityProjectSchema, type CommunityProject } from '@vuejs-community/schema'
import type { Database } from 'db0'
import { existsSync, mkdirSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
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
  githubRepository: string
  npm: string
  npmPackage: string
  website: string
  fallbackDownloadsMonthly: number
  fallbackDownloadsWeekly: number
  fallbackStars: number
}

interface NpmMetric {
  packageName: string
  downloadsMonthly: number
  downloadsWeekly: number
  updatedAt: string
}

interface GithubMetric {
  repository: string
  stars: number
  updatedAt: string
}

interface MetricsSnapshot {
  npm: Map<string, NpmMetric>
  github: Map<string, GithubMetric>
}

interface BuildOptions {
  outputPath: string
  pluginMetricsPath: string
  sourceRoots: string[]
}

interface ResolvedProject {
  projects: NormalizedProject[]
  sourceCounts: Map<string, number>
}

interface LegacyProjectMetricRow {
  downloads_monthly: number | null
  downloads_weekly: number | null
  github: string | null
  npm: string | null
  stars: number | null
}

interface TableInfoRow {
  name: string
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
  return {
    outputPath: resolve(repositoryRoot, 'server/assets/index.db'),
    pluginMetricsPath: resolve(repositoryRoot, '.cache/plugin-npm-metrics.json'),
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
    githubRepository: project.source?.github || '',
    npm: project.links?.npm || '',
    npmPackage: project.source?.npm || '',
    website: project.links?.website || '',
    fallbackDownloadsMonthly: project.stats?.downloads?.monthly || 0,
    fallbackDownloadsWeekly: project.stats?.downloads?.weekly || 0,
    fallbackStars: project.stats?.stars ?? 0,
  }
}

async function loadProjects(sourceRoots: string[]): Promise<ResolvedProject> {
  const sourceCounts = new Map<string, number>()
  const sourceFiles: Array<{ path: string, source: string }> = []

  for (const sourceRoot of sourceRoots) {
    const source = basename(dirname(sourceRoot))
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
  const projectPaths = new Map<string, string>()
  for (const { path: sourceFile, source } of sourceFiles) {
    let rawProject: CommunityProject
    try {
      const importedModule = await import(pathToFileURL(sourceFile).href)
      rawProject = communityProjectSchema.parse(importedModule.default)
    }
    catch (error) {
      throw new Error(`Invalid project metadata in ${sourceFile}`, { cause: error })
    }

    const project = normalizeProject(rawProject, source)
    const identity = `${project.category}:${project.name}`
    const existingPath = projectPaths.get(identity)
    if (existingPath) {
      throw new Error(
        `Duplicate project "${project.name}" in category "${project.category}": ${existingPath} and ${sourceFile}`,
      )
    }

    projectPaths.set(identity, sourceFile)
    projects.push(project)
  }

  return { projects, sourceCounts }
}

function parseNpmPackage(link: string): string {
  try {
    const url = new URL(link)
    const marker = '/package/'
    const index = url.pathname.indexOf(marker)
    return index >= 0
      ? decodeURIComponent(url.pathname.slice(index + marker.length)).replace(/\/$/, '')
      : ''
  }
  catch {
    return ''
  }
}

function parseGithubRepository(link: string): string {
  try {
    const url = new URL(link)
    if (url.hostname !== 'github.com' && url.hostname !== 'www.github.com')
      return ''

    const [owner, repository] = url.pathname.split('/').filter(Boolean)
    return owner && repository
      ? `${owner}/${repository.replace(/\.git$/, '')}`
      : ''
  }
  catch {
    return ''
  }
}

async function tableExists(database: Database, table: string): Promise<boolean> {
  return Boolean(await database.prepare(`
    SELECT 1
    FROM sqlite_master
    WHERE type = 'table' AND name = ?
  `).get(table))
}

async function tableColumns(database: Database, table: string): Promise<Set<string>> {
  const rows = await database.prepare(`PRAGMA table_info("${table}")`).all() as TableInfoRow[]
  return new Set(rows.map(row => row.name))
}

async function loadExistingMetrics(databasePath: string): Promise<MetricsSnapshot> {
  const snapshot: MetricsSnapshot = {
    npm: new Map(),
    github: new Map(),
  }

  if (!existsSync(databasePath))
    return snapshot

  const database = createDatabase(nodeSqliteConnector({ path: databasePath }))
  try {
    if (await tableExists(database, 'npm_metrics')) {
      const rows = await database.prepare(`
        SELECT package_name, downloads_weekly, downloads_monthly, updated_at
        FROM npm_metrics
      `).all() as Array<{
        package_name: string
        downloads_weekly: number
        downloads_monthly: number
        updated_at: string
      }>

      for (const row of rows) {
        snapshot.npm.set(row.package_name, {
          packageName: row.package_name,
          downloadsWeekly: row.downloads_weekly,
          downloadsMonthly: row.downloads_monthly,
          updatedAt: row.updated_at,
        })
      }
    }

    if (await tableExists(database, 'github_metrics')) {
      const rows = await database.prepare(`
        SELECT repository, stars, updated_at
        FROM github_metrics
      `).all() as Array<{
        repository: string
        stars: number
        updated_at: string
      }>

      for (const row of rows) {
        snapshot.github.set(row.repository, {
          repository: row.repository,
          stars: row.stars,
          updatedAt: row.updated_at,
        })
      }
    }

    // Bootstrap a pre-migration database from the metric snapshots currently
    // materialized on projects. Newer metric-table rows always win.
    const projectColumns = await tableColumns(database, 'projects')
    const hasLegacyMetrics = [
      'downloads_weekly',
      'downloads_monthly',
      'stars',
    ].every(column => projectColumns.has(column))

    if (hasLegacyMetrics) {
      const rows = await database.prepare(`
        SELECT npm, github, downloads_weekly, downloads_monthly, stars
        FROM projects
      `).all() as LegacyProjectMetricRow[]
      const migratedAt = new Date().toISOString()

      for (const row of rows) {
        const packageName = row.npm ? parseNpmPackage(row.npm) : ''
        if (packageName && !snapshot.npm.has(packageName)) {
          snapshot.npm.set(packageName, {
            packageName,
            downloadsWeekly: row.downloads_weekly ?? 0,
            downloadsMonthly: row.downloads_monthly ?? 0,
            updatedAt: migratedAt,
          })
        }

        const repository = row.github ? parseGithubRepository(row.github) : ''
        if (repository && !snapshot.github.has(repository)) {
          snapshot.github.set(repository, {
            repository,
            stars: row.stars ?? 0,
            updatedAt: migratedAt,
          })
        }
      }
    }
  }
  finally {
    await database.dispose()
  }

  return snapshot
}

async function mergePluginMetrics(snapshot: MetricsSnapshot, path: string): Promise<void> {
  if (!existsSync(path))
    return

  const metrics = JSON.parse(await readFile(path, 'utf8')) as NpmMetric[]
  for (const metric of metrics) {
    if (!metric.packageName || !Number.isInteger(metric.downloadsMonthly) || !Number.isInteger(metric.downloadsWeekly))
      throw new Error(`Invalid plugin npm metric for "${metric.packageName || 'unknown'}".`)

    snapshot.npm.set(metric.packageName, metric)
  }
}

function mergeProjectFallbackMetrics(snapshot: MetricsSnapshot, projects: NormalizedProject[]): void {
  const migratedAt = new Date().toISOString()

  for (const project of projects) {
    if (project.npmPackage && !snapshot.npm.has(project.npmPackage)) {
      snapshot.npm.set(project.npmPackage, {
        packageName: project.npmPackage,
        downloadsWeekly: project.fallbackDownloadsWeekly,
        downloadsMonthly: project.fallbackDownloadsMonthly,
        updatedAt: migratedAt,
      })
    }

    if (project.githubRepository && !snapshot.github.has(project.githubRepository)) {
      snapshot.github.set(project.githubRepository, {
        repository: project.githubRepository,
        stars: project.fallbackStars,
        updatedAt: migratedAt,
      })
    }
  }
}

async function createSchema(database: Database): Promise<void> {
  await database.exec(`
    PRAGMA foreign_keys = ON;
    PRAGMA journal_mode = DELETE;
    PRAGMA synchronous = FULL;

    CREATE TABLE projects (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT NOT NULL,
      icon TEXT NOT NULL,
      category TEXT NOT NULL,
      source TEXT NOT NULL,
      github TEXT,
      github_repository TEXT,
      npm TEXT,
      npm_package TEXT,
      website TEXT,
      UNIQUE (category, name)
    ) STRICT;

    CREATE INDEX projects_name_idx ON projects (name);
    CREATE INDEX projects_npm_package_idx ON projects (npm_package);
    CREATE INDEX projects_github_repository_idx ON projects (github_repository);

    CREATE TABLE "project-meta" (
      project_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      "values" TEXT NOT NULL,
      type TEXT NOT NULL CHECK (type IN ('types', 'tags', 'filter')),
      PRIMARY KEY (project_id, type, "values"),
      FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
    ) STRICT;

    CREATE INDEX project_meta_type_values_idx ON "project-meta" (type, "values");
    CREATE INDEX project_meta_name_idx ON "project-meta" (name);

    CREATE TABLE npm_metrics (
      package_name TEXT PRIMARY KEY,
      downloads_weekly INTEGER NOT NULL DEFAULT 0 CHECK (downloads_weekly >= 0),
      downloads_monthly INTEGER NOT NULL DEFAULT 0 CHECK (downloads_monthly >= 0),
      updated_at TEXT NOT NULL
    ) STRICT;

    CREATE TABLE github_metrics (
      repository TEXT PRIMARY KEY,
      stars INTEGER NOT NULL DEFAULT 0 CHECK (stars >= 0),
      updated_at TEXT NOT NULL
    ) STRICT;
  `)
}

async function insertMetrics(database: Database, snapshot: MetricsSnapshot): Promise<void> {
  const insertNpmMetric = database.prepare(`
    INSERT INTO npm_metrics (
      package_name,
      downloads_weekly,
      downloads_monthly,
      updated_at
    ) VALUES (?, ?, ?, ?)
  `)
  const insertGithubMetric = database.prepare(`
    INSERT INTO github_metrics (repository, stars, updated_at)
    VALUES (?, ?, ?)
  `)

  const npmMetrics = [...snapshot.npm.values()]
    .sort((a, b) => a.packageName.localeCompare(b.packageName))
  for (const metric of npmMetrics) {
    await insertNpmMetric.run(
      metric.packageName,
      metric.downloadsWeekly,
      metric.downloadsMonthly,
      metric.updatedAt,
    )
  }

  const githubMetrics = [...snapshot.github.values()]
    .sort((a, b) => a.repository.localeCompare(b.repository))
  for (const metric of githubMetrics)
    await insertGithubMetric.run(metric.repository, metric.stars, metric.updatedAt)
}

async function insertProjects(
  database: Database,
  projects: NormalizedProject[],
): Promise<void> {
  const insertProject = database.prepare(`
    INSERT INTO projects (
      id,
      name,
      description,
      icon,
      category,
      source,
      github,
      github_repository,
      npm,
      npm_package,
      website
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)
  const insertMeta = database.prepare(`
    INSERT INTO "project-meta" (project_id, name, "values", type)
    VALUES (?, ?, ?, ?)
  `)

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
      project.githubRepository,
      project.npm,
      project.npmPackage,
      project.website,
    )

    for (const type of project.types)
      await insertMeta.run(projectId, project.name, type, 'types')

    for (const tag of project.tags)
      await insertMeta.run(projectId, project.name, tag, 'tags')

    for (const filter of project.filter)
      await insertMeta.run(projectId, project.name, filter, 'filter')
  }
}

async function validateDatabase(database: Database): Promise<void> {
  const integrity = await database.prepare('PRAGMA integrity_check').get() as Record<string, string>
  if (Object.values(integrity)[0] !== 'ok')
    throw new Error(`SQLite integrity check failed: ${JSON.stringify(integrity)}`)

  const foreignKeyErrors = await database.prepare('PRAGMA foreign_key_check').all()
  if (foreignKeyErrors.length > 0)
    throw new Error(`SQLite foreign key check failed: ${JSON.stringify(foreignKeyErrors)}`)
}

async function buildDatabase(options: BuildOptions): Promise<void> {
  const { projects, sourceCounts } = await loadProjects(options.sourceRoots)
  const metrics = await loadExistingMetrics(options.outputPath)
  await mergePluginMetrics(metrics, options.pluginMetricsPath)
  mergeProjectFallbackMetrics(metrics, projects)

  mkdirSync(dirname(options.outputPath), { recursive: true })
  const temporaryPath = `${options.outputPath}.next`
  rmSync(temporaryPath, { force: true })
  writeFileSync(temporaryPath, '')

  const database = createDatabase(nodeSqliteConnector({ path: temporaryPath }))
  let built = false

  try {
    await createSchema(database)
    await database.exec('BEGIN IMMEDIATE')

    try {
      await insertMetrics(database, metrics)
      await insertProjects(database, projects)
      await database.exec('COMMIT')
    }
    catch (error) {
      await database.exec('ROLLBACK')
      throw error
    }

    await database.exec('PRAGMA optimize')
    await validateDatabase(database)
    built = true
  }
  finally {
    await database.dispose()
    if (!built)
      rmSync(temporaryPath, { force: true })
  }

  renameSync(temporaryPath, options.outputPath)

  for (const [sourceRoot, count] of sourceCounts) {
    const relativeRoot = sourceRoot.replace(`${repositoryRoot}/`, '')
    console.log(`${relativeRoot}: ${count} project files`)
  }

  console.log(`Wrote ${projects.length} projects.`)
  console.log(`Preserved ${metrics.npm.size} npm metrics and ${metrics.github.size} GitHub metrics.`)
  console.log(`Database: ${options.outputPath}`)
}

await buildDatabase(readOptions())
