import { projectCategories } from '@vuejs-community/schema'
import * as z from 'zod'

const categorySchema = z.enum(projectCategories)

interface ProjectMetaStatRow extends ProjectMetaStat {
  type: ProjectMetaStatType
}

export default defineEventHandler(async (event): Promise<ProjectMetaStats> => {
  const categoryResult = categorySchema.safeParse(
    getRouterParam(event, 'category'),
  )

  if (!categoryResult.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid project category',
    })
  }

  const category = categoryResult.data

  const statement = event.context.database.prepare(`
    SELECT
      meta.type,
      meta."values" AS value,
      COUNT(*) AS count
    FROM projects AS project
    INNER JOIN "project-meta" AS meta
      ON project.id = meta.project_id
    WHERE
      project.category = ?
      AND meta.type IN ('tags', 'types')
    GROUP BY
      meta.type,
      meta."values"
    ORDER BY
      meta.type ASC,
      count DESC,
      value COLLATE NOCASE ASC
  `)

  const rows = await statement.all(category) as ProjectMetaStatRow[]
  const result: ProjectMetaStats = {
    tags: [],
    types: [],
  }

  for (const { type, value, count } of rows)
    result[type].push({ value, count })

  return result
})
