import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-import-defer',
  description: 'Transform import defer syntax to dynamic import()',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'lisonge/unplugin-import-defer',
    npm: 'unplugin-import-defer',
  },
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
