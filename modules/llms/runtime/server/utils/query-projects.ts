import type { Database } from 'db0'

export async function queryLlmsProjects(database: Database): Promise<ProjectRecord[]> {
  const statement = database.prepare(`
    SELECT
      project.name,
      project.description,
      project.category,
      project.source,
      project.github,
      project.npm,
      project.website,
      COALESCE(npm_metric.downloads_monthly, 0) AS downloads_monthly,
      COALESCE(npm_metric.downloads_weekly, 0) AS downloads_weekly,
      COALESCE(github_metric.stars, 0) AS stars
    FROM projects AS project
    LEFT JOIN npm_metrics AS npm_metric
      ON npm_metric.package_name = project.npm_package
    LEFT JOIN github_metrics AS github_metric
      ON github_metric.repository = project.github_repository
  `)

  return await statement.all() as ProjectRecord[]
}
