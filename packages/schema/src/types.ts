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
  // Project name, must match the real package / repository name
  name: string
  // One-sentence description of what the project does
  description: string

  /**
   * Local icon name (svg under app/assets/icon without the.svg suffix),
   * or https://icon-sets.iconify.design/ icon name,
   * or an empty string when no icon is present
   */
  // Icon: local icon name (svg under app/assets/icon, without the .svg suffix)
  // or an iconify icon name (e.g. 'logos:vue'); pass an empty string if there is none
  icon: string

  // Project category: 'ui' | 'hooks' | 'component' | 'admin' | 'uniapp' etc.
  category: ProjectCategory

  // Project type list, e.g. 'ui-library', 'composable-library', etc.
  types: string[]

  // Optional: tags for filtering and searching within the site
  tags?: string[]

  filter?: string[]

  // Data source, used by scripts to fetch stats such as Stars / downloads
  // github uses the 'owner/repo' format; npm takes the package name directly
  links?: {
    github?: string
    npm?: string
    website?: string
  }

  // Optional: links shown publicly
  source?: Source

  // Stats (Stars, downloads) are synced automatically by scheduled jobs, no manual maintenance needed
  stats?: Stats
}
