import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'env-attr-cleaner',
  description: 'Universal plugin to strip data-* attributes from production builds',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
    'nuxt',
    'nextjs',
    'data-attributes',
    'testing',
    'e2e',
    'playwright',
    'cypress',
  ],
  links: {
    github: 'https://github.com/techmefr/env-attr-cleaner',
    npm: 'https://www.npmjs.com/package/env-attr-cleaner',
    website: 'https://github.com/techmefr/env-attr-cleaner/tree/main/packages/unplugin#readme',
  },
  source: {
    github: 'techmefr/env-attr-cleaner',
    npm: 'env-attr-cleaner',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 503,
      weekly: 29,
    },
  },
})
