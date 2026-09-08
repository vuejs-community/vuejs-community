import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-lezer',
  description: 'Universal plugin to import Lezer grammar files',
  icon: 'icon:dark-unplugin',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'lezer',
    'grammar',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'illright/unplugin-lezer',
    npm: 'unplugin-lezer',
  },
  links: {
    github: 'https://github.com/illright/unplugin-lezer',
    npm: 'https://www.npmjs.com/package/unplugin-lezer',
  },
  stats: {
    downloads: {
      monthly: 1951,
      weekly: 560,
    },
  },
})
