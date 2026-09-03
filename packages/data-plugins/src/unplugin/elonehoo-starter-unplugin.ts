import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@elonehoo/starter-unplugin',
  description: 'Starter template for unplugin',
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
    github: 'https://github.com/elonehoo/starter-unplugin',
    npm: 'https://www.npmjs.com/package/@elonehoo/starter-unplugin',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
