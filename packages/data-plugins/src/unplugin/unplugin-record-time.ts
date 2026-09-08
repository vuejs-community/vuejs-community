import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-record-time',
  description: 'Time reporting for Vite/Rollup/Webpack project.',
  icon: 'icon:dark-unplugin',
  version: '0.0.1',
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
  source: {
    github: 'elonehoo/unplugin-record-time',
    npm: 'unplugin-record-time',
  },
  links: {
    github: 'https://github.com/elonehoo/unplugin-record-time',
    npm: 'https://www.npmjs.com/package/unplugin-record-time',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
