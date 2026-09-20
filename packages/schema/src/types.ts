import * as z from 'zod'

export const projectCategories = [
  'ui',
  'hooks',
  'nuxt',
  'plugin',
  'starter',
  'utilities',
  'library',
  'tool',
  'component',
  'uniapp',
  'admin',
] as const

export type ProjectCategory = typeof projectCategories[number]

export const projectCategorySchema = z.enum(projectCategories)

const nonEmptyStringSchema = z.string().trim().min(1)
const webUrlSchema = z.url().refine(
  url => ['http:', 'https:'].includes(new URL(url).protocol),
  'Expected an HTTP or HTTPS URL',
)
const optionalWebUrlSchema = webUrlSchema.optional().catch(undefined)

export const sourceSchema = z.object({
  github: nonEmptyStringSchema.regex(/^[^/\s]+\/[^/\s]+$/, 'Expected GitHub source in owner/repository format').optional(),
  npm: nonEmptyStringSchema.optional(),
}).strict()

export const statsSchema = z.object({
  stars: z.number().int().nonnegative().optional(),
  downloads: z.object({
    monthly: z.number().int().nonnegative(),
    weekly: z.number().int().nonnegative(),
  }).strict().optional(),
}).strict()

export const communityProjectSchema = z.object({
  name: nonEmptyStringSchema,
  description: z.string(),
  icon: z.string(),
  category: projectCategorySchema,
  types: z.array(nonEmptyStringSchema).min(1),
  tags: z.array(nonEmptyStringSchema).optional(),
  filter: z.array(nonEmptyStringSchema).optional(),
  links: z.object({
    github: optionalWebUrlSchema,
    npm: optionalWebUrlSchema,
    website: optionalWebUrlSchema,
  }).strict().optional(),
  source: sourceSchema.optional(),
  // Legacy snapshot only. Runtime metrics are persisted in server/assets/index.db.
  stats: statsSchema.optional(),
}).strict()

export type Source = z.infer<typeof sourceSchema>
export type Stats = z.infer<typeof statsSchema>
export type CommunityProject = z.infer<typeof communityProjectSchema>
