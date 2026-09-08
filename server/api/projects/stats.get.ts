export default defineEventHandler(async (event): Promise<CategoryCounts> => {
  const statement = event.context.database.prepare(`
    SELECT
      category,
      COUNT(*) AS count
    FROM projects
    GROUP BY category
    ORDER BY
      count DESC,
      category COLLATE NOCASE ASC
  `)

  const categoryCounts = await statement.all() as CategoryCount[]

  return Object.fromEntries(
    categoryCounts.map(({ category, count }) => [category, count]),
  )
})
