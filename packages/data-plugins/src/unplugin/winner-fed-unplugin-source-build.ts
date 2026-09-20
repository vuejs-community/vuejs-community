import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@winner-fed/unplugin-source-build',
  description: 'An unplugin plugin to provide support for monorepo source code referencing.',
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
    'transform',
  ],
  links: {
    github: 'https://github.com/cklwblove/unplugin-source-build',
    npm: 'https://www.npmjs.com/package/@winner-fed/unplugin-source-build',
    website: 'https://github.com/cklwblove/unplugin-source-build#readme',
  },
  source: {
    github: 'cklwblove/unplugin-source-build',
    npm: '@winner-fed/unplugin-source-build',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
