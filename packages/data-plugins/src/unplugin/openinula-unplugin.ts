import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@openinula/unplugin',
  description: 'inulaNext unified plugin system for build tools.Based on [unplugin](https://github.com/unjs/unplugin).',
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
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@openinula/unplugin',
  },
  source: {
    npm: '@openinula/unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 1,
    },
  },
})
