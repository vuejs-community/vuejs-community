import type { Database } from 'db0'

export async function queryLlmsProjects(database: Database): Promise<ProjectRecord[]> {
  const statement = database.prepare(`
    SELECT
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
    FROM projects
  `)

  return await statement.all() as ProjectRecord[]
}
