export default defineEventHandler(async (event): Promise<CategoryCount[]> => {
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

  return await statement.all() as CategoryCount[]
})
