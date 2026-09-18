import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { createDatabase } from 'db0'
import nodeSqliteConnector from 'db0/connectors/node-sqlite'

interface CountRow {
  count: number
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
  const mismatched = await database.prepare(`
    SELECT COUNT(*) AS count
    FROM projects AS project
    LEFT JOIN npm_metrics AS npm_metric
      ON npm_metric.package_name = project.npm_package
    LEFT JOIN github_metrics AS github_metric
      ON github_metric.repository = project.github_repository
    WHERE
      (npm_metric.package_name IS NOT NULL AND (
        project.downloads_weekly != npm_metric.downloads_weekly
        OR project.downloads_monthly != npm_metric.downloads_monthly
      ))
      OR (github_metric.repository IS NOT NULL AND project.stars != github_metric.stars)
  `).get() as CountRow

  if (projects.count === 0)
    throw new Error('The projects table is empty.')
  if (mismatched.count > 0)
    throw new Error(`${mismatched.count} projects have stale materialized metrics.`)

  console.log(`Database integrity: ok`)
  console.log(`Projects: ${projects.count}`)
  console.log(`npm metrics: ${npmMetrics.count}`)
  console.log(`GitHub metrics: ${githubMetrics.count}`)
}
finally {
  await database.dispose()
}
