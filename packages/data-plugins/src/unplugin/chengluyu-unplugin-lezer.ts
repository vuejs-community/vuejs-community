import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chengluyu/unplugin-lezer',
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
  source: {
    github: 'illright/unplugin-lezer',
    npm: '@chengluyu/unplugin-lezer',
  },
  links: {
    github: 'https://github.com/illright/unplugin-lezer',
    npm: 'https://www.npmjs.com/package/@chengluyu/unplugin-lezer',
    website: 'https://github.com/illright/unplugin-lezer#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
