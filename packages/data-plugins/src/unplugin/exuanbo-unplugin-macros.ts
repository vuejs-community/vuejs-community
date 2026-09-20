import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@exuanbo/unplugin-macros',
  description: 'Macros for bundlers.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  links: {
    github: 'https://github.com/exuanbo/unplugin-macros',
    npm: 'https://www.npmjs.com/package/@exuanbo/unplugin-macros',
    website: 'https://github.com/exuanbo/unplugin-macros#readme',
  },
  source: {
    github: 'exuanbo/unplugin-macros',
    npm: '@exuanbo/unplugin-macros',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
