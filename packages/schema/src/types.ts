export type ProjectCategory
  = | 'ui'
    | 'hooks'
    | 'nuxt'
    | 'plugin'
    | 'starter'
    | 'utilities'
    | 'library'
    | 'tool'
    | 'component'
    | 'uniapp'
    | 'admin'

export type ProjectType
// UI
  = | 'ui-library'
    | 'headless-ui'
    | 'component-library'
    | 'component-collection'
    | 'mobile-ui'
    | 'visualization'
    | 'form-library'
    | 'table-library'
    | 'editor'

    // Composable
    | 'composable-library'
    | 'composable'

    // Vue Library
    | 'state-management'
    | 'router'
    | 'form'
    | 'validation'
    | 'i18n'
    | 'data-fetching'
    | 'animation'
    | 'utility-library'

    // Nuxt
    | 'nuxt-module'
    | 'nuxt-layer'
    | 'nuxt-extension'
    | 'nitro-plugin'
    | 'nitro-preset'

    // Build Plugin
    | 'vite-plugin'
    | 'unplugin'
    | 'rolldown-plugin'
    | 'rollup-plugin'
    | 'webpack-plugin'
    | 'rspack-plugin'
    | 'esbuild-plugin'

    // Tooling
    | 'devtool'
    | 'ide-extension'
    | 'eslint-plugin'
    | 'oxlint-plugin'
    | 'typescript-plugin'
    | 'testing-tool'
    | 'compiler'
    | 'macro'

    // Starter
    | 'starter'
    | 'template'
    | 'admin-template'
    | 'fullstack-template'

    // Framework
    | 'meta-framework'
    | 'ssg'
    | 'docs-framework'
    | 'mobile-framework'
    | 'desktop-framework'
    | 'pwa-framework'

export interface Source {
  github?: string
  npm?: string
}

export interface Stats {
  stars?: number
  downloads?: {
    monthly: number
    weekly: number
  }
}

export interface CommunityProject {
  name: string
  description: string

  category: ProjectCategory

  types: string[]

  tags?: string[]

  filter?: string[]

  links?: {
    github?: string
    npm?: string
    website?: string
  }

  source?: Source

  stats?: Stats
}
