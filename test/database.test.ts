import assert from 'node:assert/strict'
import { resolve } from 'node:path'
import { createDatabase } from 'db0'
import nodeSqliteConnector from 'db0/connectors/node-sqlite'
import test from 'vitest'

test('the plugin catalog exceeds the legacy 101-page window', async () => {
  const database = createDatabase(nodeSqliteConnector({
    path: resolve('server/assets/index.db'),
  }))

  try {
    const row = await database.prepare(`
      SELECT COUNT(*) AS total
      FROM projects
      WHERE category = ?
    `).get('plugin') as { total: number }

    assert.ok(row.total > 12 * 101)
  }
  finally {
    await database.dispose()
  }
})

test('project metadata filters only return matching projects', async () => {
  const database = createDatabase(nodeSqliteConnector({
    path: resolve('server/assets/index.db'),
  }))

  try {
    const rows = await database.prepare(`
      SELECT DISTINCT project.id, meta.type, meta."values" AS value
      FROM projects AS project
      INNER JOIN "project-meta" AS meta
        ON meta.project_id = project.id
      WHERE meta.type = ? AND meta."values" = ?
    `).all('types', 'vite-plugin') as Array<{ id: number, type: string, value: string }>

    assert.ok(rows.length > 0)
    assert.ok(rows.every(row => row.type === 'types' && row.value === 'vite-plugin'))
  }
  finally {
    await database.dispose()
  }
})
