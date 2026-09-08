import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-time-stat',
  description: 'Build time stat reporting for unplugin',
  icon: 'icon:dark-unplugin',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'rollup',
    'esbuild',
    'performance',
    'stats',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'kazupon/unplugin-time-stat',
    npm: 'unplugin-time-stat',
  },
  links: {
    github: 'https://github.com/kazupon/unplugin-time-stat',
    npm: 'https://www.npmjs.com/package/unplugin-time-stat',
  },
  stats: {
    downloads: {
      monthly: 27866,
      weekly: 7762,
    },
  },
})
