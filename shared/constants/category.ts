import type { ProjectCategory } from '~~/packages/schema/src/types.ts'

export interface CategoryDefinition {
  id: ProjectCategory
  label: string
  description: string
}

export const projectCategoryMetadata: CategoryDefinition[] = [
  {
    id: 'ui',
    label: 'UI Libraries',
    description: 'Discover UI libraries and design systems built for Vue.',
  },
  {
    id: 'component',
    label: 'Components',
    description: 'Explore reusable Vue components for building modern interfaces.',
  },
  {
    id: 'hooks',
    label: 'Vue Composables',
    description: 'Discover reusable Vue composables for common application needs.',
  },
  {
    id: 'nuxt',
    label: 'Nuxt Modules',
    description: 'Explore modules that extend and enhance your Nuxt applications.',
  },
  {
    id: 'plugin',
    label: 'Tooling Plugins',
    description: 'Discover plugins across Vite, Rollup, Rolldown and Unplugin.',
  },
  {
    id: 'starter',
    label: 'Starters',
    description: 'Find starter templates and boilerplates for Vue and Nuxt projects.',
  },
  {
    id: 'utilities',
    label: 'Utilities',
    description: 'Discover utility libraries that simplify everyday Vue development.',
  },
  {
    id: 'library',
    label: 'Libraries',
    description: 'Explore libraries that extend the capabilities of Vue applications.',
  },
  {
    id: 'tool',
    label: 'Developer Tools',
    description: 'Discover developer tools for building, debugging and maintaining Vue projects.',
  },
  {
    id: 'admin',
    label: 'Admin Templates',
    description: 'Explore admin dashboards and management templates built with Vue.',
  },
  {
    id: 'uniapp',
    label: 'UniApp Ecosystem',
    description: 'Discover libraries, components and tools for the UniApp ecosystem.',
  },
]

export const projectCategoryIds = projectCategoryMetadata.map(c => c.id) as string[]
