import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { createDatabase } from 'db0'
import nodeSqliteConnector from 'db0/connectors/node-sqlite'

interface CountRow {
  count: number
}

interface TableInfoRow {
  name: string
}

const databasePath = resolve(import.meta.dirname, '../server/assets/index.db')
if (!existsSync(databasePath))
  throw new Error(`SQLite database not found at ${databasePath}`)

const database = createDatabase(nodeSqliteConnector({ path: databasePath }))

try {
  const integrity = await database.prepare('PRAGMA integrity_check').get() as Record<string, string>
  if (Object.values(integrity)[0] !== 'ok')
    throw new Error(`SQLite integrity check failed: ${JSON.stringify(integrity)}`)

  const foreignKeyErrors = await database.prepare('PRAGMA foreign_key_check').all()
  if (foreignKeyErrors.length > 0)
    throw new Error(`SQLite foreign key check failed: ${JSON.stringify(foreignKeyErrors)}`)

  const requiredTables = ['projects', 'project-meta', 'npm_metrics', 'github_metrics']
  for (const table of requiredTables) {
    const exists = await database.prepare(`
      SELECT 1
      FROM sqlite_master
      WHERE type = 'table' AND name = ?
    `).get(table)
    if (!exists)
      throw new Error(`Required SQLite table is missing: ${table}`)
  }

  const projects = await database.prepare('SELECT COUNT(*) AS count FROM projects').get() as CountRow
  const npmMetrics = await database.prepare('SELECT COUNT(*) AS count FROM npm_metrics').get() as CountRow
  const githubMetrics = await database.prepare('SELECT COUNT(*) AS count FROM github_metrics').get() as CountRow
  const projectColumns = await database.prepare('PRAGMA table_info(projects)').all() as TableInfoRow[]
  const forbiddenMetricColumns = new Set(['downloads_monthly', 'downloads_weekly', 'stars'])
  const remainingMetricColumns = projectColumns
    .map(column => column.name)
    .filter(column => forbiddenMetricColumns.has(column))

  if (projects.count === 0)
    throw new Error('The projects table is empty.')
  if (remainingMetricColumns.length > 0)
    throw new Error(`The projects table still contains metric columns: ${remainingMetricColumns.join(', ')}`)

  console.log(`Database integrity: ok`)
  console.log(`Projects: ${projects.count}`)
  console.log(`npm metrics: ${npmMetrics.count}`)
  console.log(`GitHub metrics: ${githubMetrics.count}`)
}
finally {
  await database.dispose()
}
