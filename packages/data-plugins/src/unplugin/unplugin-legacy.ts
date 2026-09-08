import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-legacy',
  description: 'A universal bundler plugin which adds export declarations to legacy non-module scripts.',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'wzc520pyfm/unplugin-legacy',
    npm: 'unplugin-legacy',
  },
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
