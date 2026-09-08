import type { ProjectCategory } from '~~/packages/schema/src/types.ts'

export interface CategoryDefinition {
  id: ProjectCategory
  label: string
}

export const projectCategoryMetadata: CategoryDefinition[] = [
  { id: 'ui', label: 'UI Libraries' },
  { id: 'component', label: 'Components' },
  { id: 'hooks', label: 'Hooks and Composables' },
  { id: 'nuxt', label: 'Nuxt Modules' },
  { id: 'plugin', label: 'Vite Plugins' },
  { id: 'starter', label: 'Starters' },
  { id: 'utilities', label: 'Utilities' },
  { id: 'library', label: 'Libraries' },
  { id: 'tool', label: 'Developer Tools' },
  { id: 'admin', label: 'Admin Templates' },
  { id: 'uniapp', label: 'UniApp Ecosystem' },
]

export const projectCategoryIds = projectCategoryMetadata.map(c => c.id) as string[]
