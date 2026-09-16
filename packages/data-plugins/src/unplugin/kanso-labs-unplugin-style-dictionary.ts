import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kanso-labs/unplugin-style-dictionary',
  description: 'Compile Style Dictionary design tokens ahead of your bundler (Vite, Rolldown, Rollup, or Webpack) from a single unplugin-based plugin, with automatic watching and rebuilding under Vite',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'rolldown',
    'rollup',
    'webpack',
    'style-dictionary',
    'design-tokens',
    'tokens',
  ],
  source: {
    github: 'kanso-labs/unplugin-style-dictionary',
    npm: '@kanso-labs/unplugin-style-dictionary',
  },
  links: {
    github: 'https://github.com/kanso-labs/unplugin-style-dictionary',
    npm: 'https://www.npmjs.com/package/@kanso-labs/unplugin-style-dictionary',
    website: 'https://github.com/kanso-labs/unplugin-style-dictionary#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5959,
      weekly: 927,
    },
  },
})
