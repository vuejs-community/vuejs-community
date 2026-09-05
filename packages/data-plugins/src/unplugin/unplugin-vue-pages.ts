import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-pages',
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
    github: 'https://github.com/linhuibin98/unplugin-vue-pages',
    npm: 'https://www.npmjs.com/package/unplugin-vue-pages',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
