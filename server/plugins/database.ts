import { resolve } from 'node:path'
import { createDatabase } from 'db0'
import nodeSqliteConnector from 'db0/connectors/node-sqlite'

export default defineNitroPlugin(async (nitroApp) => {
  const databasePath = resolve(process.cwd(), 'public/index.db')

  const database = createDatabase(nodeSqliteConnector({ path: databasePath }))

  const projectsTable = await database.prepare(`
    SELECT name
    FROM sqlite_master
    WHERE type = 'table' AND name = 'projects'
  `).get()

  if (!projectsTable) {
    await database.dispose()
    throw new Error(`The projects table was not found in ${databasePath}`)
  }

  nitroApp.hooks.hook('request', (event) => {
    event.context.database = database
  })

  nitroApp.hooks.hook('close', async () => {
    await database.dispose()
  })
})
