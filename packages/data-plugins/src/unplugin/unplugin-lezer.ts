import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-lezer',
  description: 'Universal plugin to import Lezer grammar files',
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
    'lezer',
    'grammar',
  ],
  links: {
    github: 'https://github.com/illright/unplugin-lezer',
    npm: 'https://www.npmjs.com/package/unplugin-lezer',
    website: 'https://github.com/illright/unplugin-lezer#readme',
  },
  source: {
    github: 'illright/unplugin-lezer',
    npm: 'unplugin-lezer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1559,
      weekly: 300,
    },
  },
})
