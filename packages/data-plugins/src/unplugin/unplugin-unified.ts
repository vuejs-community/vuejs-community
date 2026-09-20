import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-unified',
  description: 'unified pipeline for Vite, Webpack, Rollup, and more',
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
    'unified',
  ],
  links: {
    github: 'https://github.com/antfu/unplugin-unified',
    npm: 'https://www.npmjs.com/package/unplugin-unified',
    website: 'https://github.com/antfu/unplugin-unified#readme',
  },
  source: {
    github: 'antfu/unplugin-unified',
    npm: 'unplugin-unified',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
