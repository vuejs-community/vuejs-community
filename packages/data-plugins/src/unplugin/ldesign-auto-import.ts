import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ldesign/auto-import',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'astro',
    'webpack',
    'rollup',
    'auto-import',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@ldesign/auto-import',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 9,
    },
  },
})
