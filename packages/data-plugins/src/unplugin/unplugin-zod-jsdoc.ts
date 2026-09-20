import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-zod-jsdoc',
  description: 'Universal plugin for transforming JSDoc comments on Zod v4 schemas into runtime metadata',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'zod',
    'jsdoc',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/screeny05/unplugin-zod-jsdoc',
    npm: 'https://www.npmjs.com/package/unplugin-zod-jsdoc',
    website: 'https://github.com/screeny05/unplugin-zod-jsdoc#readme',
  },
  source: {
    github: 'screeny05/unplugin-zod-jsdoc',
    npm: 'unplugin-zod-jsdoc',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 201,
      weekly: 3,
    },
  },
})
