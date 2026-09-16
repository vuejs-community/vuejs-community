import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-time-stat-nightly',
  description: 'Build time stat reporting for unplugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'kazupon/unplugin-time-stat',
    npm: 'unplugin-time-stat-nightly',
  },
  links: {
    github: 'https://github.com/kazupon/unplugin-time-stat',
    npm: 'https://www.npmjs.com/package/unplugin-time-stat-nightly',
    website: 'https://github.com/kazupon/unplugin-time-stat#readme',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
