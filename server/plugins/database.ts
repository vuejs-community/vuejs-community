import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { createDatabase } from 'db0'
import nodeSqliteConnector from 'db0/connectors/node-sqlite'

async function resolveDatabasePath() {
  // 本地开发：直接读取 public/index.db
  if (!process.env.VERCEL) {
    const path = resolve(process.cwd(), 'public/index.db')

    if (!existsSync(path))
      throw new Error(`SQLite database not found at ${path}`)

    return path
  }

  // Vercel：复制到可写的 /tmp
  const path = join(tmpdir(), 'vue-community', 'index.db')

  if (existsSync(path))
    return path

  const source = await useStorage('assets:database').getItemRaw('index.db')

  if (!source)
    throw new Error('SQLite database asset not found')

  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, source)

  return path
}

export default defineNitroPlugin(async (nitroApp) => {
  const databasePath = await resolveDatabasePath()

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
