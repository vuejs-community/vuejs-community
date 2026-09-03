import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-legacy',
  description: 'A universal bundler plugin which adds export declarations to legacy non-module scripts.',
  version: '0.2.0',
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
    github: 'https://github.com/wzc520pyfm/unplugin-legacy',
    npm: 'https://www.npmjs.com/package/unplugin-legacy',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
