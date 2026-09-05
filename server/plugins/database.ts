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

export default defineNitroPlugin(async (nitroApp) => {
  const databasePath = await resolveDatabasePath()
  console.log('111111', databasePath)

  const database = createDatabase(nodeSqliteConnector({ path: databasePath }))

  const projectsTable = await database.prepare(`
        SELECT name
        FROM sqlite_master
        WHERE type = 'table'
          AND name = 'projects'
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
