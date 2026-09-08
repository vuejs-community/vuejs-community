import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-import-external-cdn',
  description: '[![npm version][npm-version-src]][npm-version-href] [![npm downloads][npm-downloads-src]][npm-downloads-href]',
  icon: 'icon:dark-unplugin',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'YieldRay/unplugin-import-external-cdn',
    npm: 'unplugin-import-external-cdn',
  },
  links: {
    github: 'https://github.com/YieldRay/unplugin-import-external-cdn',
    npm: 'https://www.npmjs.com/package/unplugin-import-external-cdn',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 5,
    },
  },
})
