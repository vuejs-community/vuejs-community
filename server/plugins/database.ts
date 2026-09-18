import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { createDatabase } from 'db0'
import nodeSqliteConnector from 'db0/connectors/node-sqlite'

async function resolveDatabasePath() {
  if (!process.env.VERCEL) {
    const path = resolve(process.cwd(), 'server/assets/index.db')

    if (!existsSync(path))
      throw new Error(`SQLite database not found at ${path}`)

    return path
  }

  const source = await useStorage('assets:server').getItemRaw('index.db')
  if (!source)
    throw new Error('SQLite database asset not found')

  const path = join('/tmp/vue-community', 'index.db')

  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, source)

  return path
}

async function initializeDatabase() {
  const databasePath = await resolveDatabasePath()
  const database = createDatabase(nodeSqliteConnector({ path: databasePath }))

  try {
    const projectsTable = await database.prepare(`
        SELECT name
        FROM sqlite_master
        WHERE type = 'table'
          AND name = 'projects'
    `).get()

    if (!projectsTable)
      throw new Error(`The projects table was not found in ${databasePath}`)

    return database
  }
  catch (error) {
    await database.dispose()
    throw error
  }
}

export default defineNitroPlugin((nitroApp) => {
  // Nitro invokes plugins synchronously and does not await an async plugin
  // callback. Register the request hook immediately, then let the first request
  // wait for the shared database initialization promise.
  const databasePromise = initializeDatabase()

  nitroApp.hooks.hook('request', async (event) => {
    event.context.database = await databasePromise
  })

  nitroApp.hooks.hook('close', async () => {
    const database = await databasePromise
    await database.dispose()
  })
})
