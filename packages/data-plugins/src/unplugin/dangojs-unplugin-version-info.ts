import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dangojs/unplugin-version-info',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '1.0.1',
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
    npm: 'https://www.npmjs.com/package/@dangojs/unplugin-version-info',
  },
  stats: {
    downloads: {
      monthly: 64,
      weekly: 6,
    },
  },
})
