import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-import-defer',
  description: 'Transform import defer syntax to dynamic import()',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'rolldown',
    'esbuild',
    'rspack',
    'farm',
    'bun',
    'transform',
    'import-defer',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/lisonge/unplugin-import-defer',
    npm: 'https://www.npmjs.com/package/unplugin-import-defer',
  },
  stats: {
    downloads: {
      monthly: 61,
      weekly: 1,
    },
  },
})
