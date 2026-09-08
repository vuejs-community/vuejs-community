import * as z from 'zod'

const numericFilterColumns = [
  'downloads_monthly',
  'downloads_weekly',
  'stars',
] as const

const pageSize = 12

const querySchema = z.object({
  more: z.coerce.number().int().min(0).max(100).default(0),
  category: z.string().trim().optional().default(''),
  source: z.string().trim().optional().default(''),
  downloads_monthly: z.coerce.number().int().min(0).default(0),
  downloads_weekly: z.coerce.number().int().min(0).default(0),
  stars: z.coerce.number().int().min(0).optional().default(0),
})

export default defineEventHandler(async (event): Promise<ProjectsResponse> => {
  const query = querySchema.parse(getQuery(event))
  const page = query.more
  const offset = page * pageSize

  const filters: ProjectFilters = {
    category: query.category,
    source: query.source,
    downloads_monthly: query.downloads_monthly,
    downloads_weekly: query.downloads_weekly,
    stars: query.stars,
  }

  const conditions: string[] = []
  const parameters: Array<number | string> = []

  if (filters.category) {
    conditions.push('category = ?')
    parameters.push(filters.category)
  }

  if (filters.source) {
    conditions.push('source = ?')
    parameters.push(filters.source)
  }

  for (const column of numericFilterColumns) {
    const value = filters[column]!

    if (value) {
      conditions.push(`${column} >= ?`)
      parameters.push(value)
    }
  }

  const whereClause = conditions.length > 0
    ? `WHERE ${conditions.join(' AND ')}`
    : ''

  const dataStatement = event.context.database.prepare(`
    SELECT
      name,
      description,
      icon,
      category,
      source,
      github,
      npm,
      website,
      downloads_monthly,
      downloads_weekly,
      stars
    FROM projects
    ${whereClause}
    ORDER BY
      stars DESC,
      downloads_monthly DESC,
      downloads_weekly DESC,
      name COLLATE NOCASE ASC
    LIMIT ?
    OFFSET ?
  `)

  const totalStatement = event.context.database.prepare(`
    SELECT COUNT(*) AS total
    FROM projects
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
