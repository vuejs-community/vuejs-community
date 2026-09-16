import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-record-time',
  description: 'Time reporting for Vite/Rollup/Webpack project.',
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
    github: 'elonehoo/unplugin-record-time',
    npm: 'unplugin-record-time',
  },
  links: {
    github: 'https://github.com/elonehoo/unplugin-record-time',
    npm: 'https://www.npmjs.com/package/unplugin-record-time',
    website: 'https://github.com/elonehoo/unplugin-record-time#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
