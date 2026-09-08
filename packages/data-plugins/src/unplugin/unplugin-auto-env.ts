import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-env',
  description: 'Automatically generate env type',
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
    github: 'elonehoo/unplugin-auto-env',
    npm: 'unplugin-auto-env',
  },
  links: {
    github: 'https://github.com/elonehoo/unplugin-auto-env',
    npm: 'https://www.npmjs.com/package/unplugin-auto-env',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
