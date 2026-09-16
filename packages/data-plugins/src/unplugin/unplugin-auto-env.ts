import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-env',
  description: 'Automatically generate env type',
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
    github: 'elonehoo/unplugin-auto-env',
    npm: 'unplugin-auto-env',
  },
  links: {
    github: 'https://github.com/elonehoo/unplugin-auto-env',
    npm: 'https://www.npmjs.com/package/unplugin-auto-env',
    website: 'https://github.com/elonehoo/unplugin-auto-env#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
