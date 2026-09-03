import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@exuanbo/unplugin-macros',
  description: 'Macros for bundlers.',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/exuanbo/unplugin-macros',
    npm: 'https://www.npmjs.com/package/@exuanbo/unplugin-macros',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 3,
    },
  },
})
