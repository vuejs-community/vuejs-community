import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@winner-fed/unplugin-check-syntax',
  description: 'A universal plugin for checking ECMAScript syntax compatibility across different bundlers',
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
    'syntax',
    'ecmascript',
    'compatibility',
    'check',
  ],
  source: {
    github: 'cklwblove/unplugin-check-syntax',
    npm: '@winner-fed/unplugin-check-syntax',
  },
  links: {
    github: 'https://github.com/cklwblove/unplugin-check-syntax',
    npm: 'https://www.npmjs.com/package/@winner-fed/unplugin-check-syntax',
    website: 'https://github.com/cklwblove/unplugin-check-syntax#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 27,
      weekly: 8,
    },
  },
})
