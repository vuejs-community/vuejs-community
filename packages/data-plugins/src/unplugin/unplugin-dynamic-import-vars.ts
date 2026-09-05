import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dynamic-import-vars',
  description: 'A universal bundler plugin to support variables in dynamic imports in Bundler.',
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
    github: 'https://github.com/antfu/unplugin-dynamic-import-vars',
    npm: 'https://www.npmjs.com/package/unplugin-dynamic-import-vars',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
