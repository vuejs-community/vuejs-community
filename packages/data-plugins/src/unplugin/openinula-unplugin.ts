import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@openinula/unplugin',
  description: 'inulaNext unified plugin system for build tools.Based on [unplugin](https://github.com/unjs/unplugin).',
  version: '0.0.4',
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
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@openinula/unplugin',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 7,
    },
  },
})
