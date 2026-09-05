import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-time-stat-nightly',
  description: 'Build time stat reporting for unplugin',
  version: '0.1.0-28332255.73ffe33',
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
  links: {
    github: 'https://github.com/kazupon/unplugin-time-stat',
    npm: 'https://www.npmjs.com/package/unplugin-time-stat-nightly',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
