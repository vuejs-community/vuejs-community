import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-zod-jsdoc',
  description: 'Universal plugin for transforming JSDoc comments on Zod v4 schemas into runtime metadata',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'zod',
    'jsdoc',
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
    github: 'https://github.com/screeny05/unplugin-zod-jsdoc',
    npm: 'https://www.npmjs.com/package/unplugin-zod-jsdoc',
  },
  stats: {
    downloads: {
      monthly: 281,
      weekly: 78,
    },
  },
})
