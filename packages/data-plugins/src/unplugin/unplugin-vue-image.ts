import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-image',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.1.6-beta.1',
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
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/unplugin-vue-image',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 20,
    },
  },
})
