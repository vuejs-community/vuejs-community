import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@elonehoo/starter-unplugin',
  description: 'Starter template for unplugin',
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
  source: {
    github: 'elonehoo/starter-unplugin',
    npm: '@elonehoo/starter-unplugin',
  },
  links: {
    github: 'https://github.com/elonehoo/starter-unplugin',
    npm: 'https://www.npmjs.com/package/@elonehoo/starter-unplugin',
    website: 'https://github.com/elonehoo/starter-unplugin#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
