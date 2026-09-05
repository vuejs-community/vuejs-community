import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-sharp',
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
    github: 'https://github.com/byronogis/unplugin-sharp',
    npm: 'https://www.npmjs.com/package/unplugin-sharp',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
