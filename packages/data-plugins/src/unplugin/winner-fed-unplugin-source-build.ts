import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@winner-fed/unplugin-source-build',
  description: 'An unplugin plugin to provide support for monorepo source code referencing.',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/cklwblove/unplugin-source-build',
    npm: 'https://www.npmjs.com/package/@winner-fed/unplugin-source-build',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
