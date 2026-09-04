const numericFilterColumns = [
  'downloads_monthly',
  'downloads_weekly',
  'stars',
] as const

function readTextFilter(value: unknown, name: string): string | undefined {
  if (value === undefined)
    return undefined

  if (typeof value !== 'string' || value.trim() === '') {
    throw createError({
      statusCode: 400,
      statusMessage: `${name} must be a non-empty string`,
    })
  }

  return value.trim()
}

function readNumberFilter(value: unknown, name: string): number | undefined {
  if (value === undefined)
    return undefined

  if (typeof value !== 'string' || value.trim() === '') {
    throw createError({
      statusCode: 400,
      statusMessage: `${name} must be a non-negative integer`,
    })
  }

  const parsedValue = Number(value)

  if (!Number.isSafeInteger(parsedValue) || parsedValue < 0) {
    throw createError({
      statusCode: 400,
      statusMessage: `${name} must be a non-negative integer`,
    })
  }

  return parsedValue
}

export default defineEventHandler(async (event): Promise<ProjectRecord[]> => {
  const query = getQuery(event)
  const filters: ProjectFilters = {
    category: readTextFilter(query.category, 'category'),
    source: readTextFilter(query.source, 'source'),
    downloads_monthly: readNumberFilter(query.downloads_monthly, 'downloads_monthly'),
    downloads_weekly: readNumberFilter(query.downloads_weekly, 'downloads_weekly'),
    stars: readNumberFilter(query.stars, 'stars'),
  }
  const conditions: string[] = []
  const parameters: Array<number | string> = []

  if (filters.category !== undefined) {
    conditions.push('category = ?')
    parameters.push(filters.category)
  }

  if (filters.source !== undefined) {
    conditions.push('source = ?')
    parameters.push(filters.source)
  }

  for (const column of numericFilterColumns) {
    const value = filters[column]

    if (value !== undefined) {
      conditions.push(`${column} >= ?`)
      parameters.push(value)
    }
  }

  const whereClause = conditions.length > 0
    ? `WHERE ${conditions.join(' AND ')}`
    : ''
  const statement = event.context.database.prepare(`
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
    ${whereClause}
    ORDER BY
      stars DESC,
      downloads_monthly DESC,
      downloads_weekly DESC,
      name COLLATE NOCASE ASC
  `)

  return await statement.all(...parameters) as ProjectRecord[]
})
