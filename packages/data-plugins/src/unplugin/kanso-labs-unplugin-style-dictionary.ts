import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kanso-labs/unplugin-style-dictionary',
  description: 'Compile Style Dictionary design tokens ahead of your bundler (Vite, Rolldown, Rollup, Webpack or Rspack) from a single unplugin-based plugin, rebuilding on a token change under Vite\'s dev server and each bundler\'s watch mode',
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
    'rspack',
    'style-dictionary',
    'design-tokens',
    'tokens',
  ],
  links: {
    github: 'https://github.com/kanso-labs/unplugin-style-dictionary',
    npm: 'https://www.npmjs.com/package/@kanso-labs/unplugin-style-dictionary',
    website: 'https://github.com/kanso-labs/unplugin-style-dictionary#readme',
  },
  source: {
    github: 'kanso-labs/unplugin-style-dictionary',
    npm: '@kanso-labs/unplugin-style-dictionary',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5959,
      weekly: 927,
    },
  },
})
