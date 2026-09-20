import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-import-defer',
  description: 'Transform import defer syntax to dynamic import()',
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
    'rolldown',
    'esbuild',
    'rspack',
    'farm',
    'bun',
    'transform',
    'import-defer',
  ],
  links: {
    github: 'https://github.com/lisonge/unplugin-import-defer',
    npm: 'https://www.npmjs.com/package/unplugin-import-defer',
    website: 'https://github.com/lisonge/unplugin-import-defer#readme',
  },
  source: {
    github: 'lisonge/unplugin-import-defer',
    npm: 'unplugin-import-defer',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
