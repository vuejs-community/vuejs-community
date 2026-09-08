import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-transform-import-meta',
  description: 'Transform ImportMeta properties and methods at build-time.',
  icon: 'icon:dark-unplugin',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'rollup',
    'rolldown',
    'esbuild',
    'farm',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'sushichan044/unplugin-transform-import-meta',
    npm: 'unplugin-transform-import-meta',
  },
  links: {
    github: 'https://github.com/sushichan044/unplugin-transform-import-meta',
    npm: 'https://www.npmjs.com/package/unplugin-transform-import-meta',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 11,
    },
  },
})
