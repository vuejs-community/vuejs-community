import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xieyezi/auto-import',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'astro',
    'webpack',
    'rollup',
    'rspack',
    'auto-import',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@xieyezi/auto-import',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 15,
    },
  },
})
