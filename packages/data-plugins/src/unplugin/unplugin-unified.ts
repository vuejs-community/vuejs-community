import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-unified',
  description: 'unified pipeline for Vite, Webpack, Rollup, and more',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'unified',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/antfu/unplugin-unified',
    npm: 'https://www.npmjs.com/package/unplugin-unified',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
