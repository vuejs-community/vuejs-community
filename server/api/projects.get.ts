import * as z from 'zod'

const numericFilterExpressions = [
  ['downloads_monthly', 'COALESCE(npm_metric.downloads_monthly, 0)'],
  ['downloads_weekly', 'COALESCE(npm_metric.downloads_weekly, 0)'],
  ['stars', 'COALESCE(github_metric.stars, 0)'],
] as const

const pageSize = 12

function escapeLikePattern(value: string) {
  return value.replace(/[\\%_]/g, character => `\\${character}`)
}

const querySchema = z.object({
  more: z.coerce.number().int().min(0).default(0),
  keyword: z.string().trim().optional().default(''),
  category: z.string().trim().optional().default(''),
  source: z.string().trim().optional().default(''),
  type: z.string().trim().optional().default(''),
  tag: z.string().trim().optional().default(''),
  downloads_monthly: z.coerce.number().int().min(0).default(0),
  downloads_weekly: z.coerce.number().int().min(0).default(0),
  stars: z.coerce.number().int().min(0).optional().default(0),
})

export default defineEventHandler(async (event): Promise<ProjectsResponse> => {
  const query = querySchema.parse(getQuery(event))
  const page = query.more
  const offset = page * pageSize

  const filters: ProjectFilters = {
    keyword: query.keyword,
    category: query.category,
    source: query.source,
    type: query.type,
    tag: query.tag,
    downloads_monthly: query.downloads_monthly,
    downloads_weekly: query.downloads_weekly,
    stars: query.stars,
  }

  const conditions: string[] = []
  const parameters: Array<number | string> = []

  if (filters.keyword) {
    conditions.push(`project.name LIKE ? ESCAPE '\\' COLLATE NOCASE`)
    parameters.push(`%${escapeLikePattern(filters.keyword)}%`)
  }

  if (filters.category) {
    conditions.push('project.category = ?')
    parameters.push(filters.category)
  }

  if (filters.source) {
    conditions.push('project.source = ?')
    parameters.push(filters.source)
  }

  for (const [field, expression] of numericFilterExpressions) {
    const value = filters[field]!

    if (value) {
      conditions.push(`${expression} >= ?`)
      parameters.push(value)
    }
  }

  const metaFilters = [
    { type: 'types', value: filters.type },
    { type: 'tags', value: filters.tag },
  ] as const

  for (const metaFilter of metaFilters) {
    if (metaFilter.value) {
      conditions.push(`EXISTS (
        SELECT 1
        FROM "project-meta" AS meta
        WHERE
          meta.project_id = project.id
          AND meta.type = ?
          AND meta."values" = ?
      )`)
      parameters.push(metaFilter.type, metaFilter.value)
    }
  }

  const whereClause = conditions.length > 0
    ? `WHERE ${conditions.join(' AND ')}`
    : ''
  const metricsJoinClause = `
    LEFT JOIN npm_metrics AS npm_metric
      ON npm_metric.package_name = project.npm_package
    LEFT JOIN github_metrics AS github_metric
      ON github_metric.repository = project.github_repository
  `

  const dataStatement = event.context.database.prepare(`
    SELECT
      project.name,
      project.description,
      project.icon,
      project.category,
      project.source,
      project.github,
      project.npm,
      project.website,
      COALESCE(npm_metric.downloads_monthly, 0) AS downloads_monthly,
      COALESCE(npm_metric.downloads_weekly, 0) AS downloads_weekly,
      COALESCE(github_metric.stars, 0) AS stars
    FROM projects AS project
    ${metricsJoinClause}
    ${whereClause}
    ORDER BY
      stars DESC,
      downloads_monthly DESC,
      downloads_weekly DESC,
      project.name COLLATE NOCASE ASC
    LIMIT ?
    OFFSET ?
  `)

  const totalStatement = event.context.database.prepare(`
    SELECT COUNT(*) AS total
    FROM projects AS project
    ${metricsJoinClause}
    ${whereClause}
  `)

  const [data, totalRow] = await Promise.all([
    dataStatement.all(...parameters, pageSize, offset) as Promise<ProjectRecord[]>,
    totalStatement.get(...parameters) as Promise<{ total: number }>,
  ])
  const total = totalRow.total

  return {
    data,
    total,
    more: offset + data.length < total,
  }
})
