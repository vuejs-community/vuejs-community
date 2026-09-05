import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-md',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.1.0',
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
    github: 'https://github.com/lrr/unplugin-md',
    npm: 'https://www.npmjs.com/package/unplugin-md',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
