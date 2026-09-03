import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-dotenv',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.0.2',
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
    github: 'https://github.com/chris-zhu/unplugin-vue-dotenv',
    npm: 'https://www.npmjs.com/package/unplugin-vue-dotenv',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 14,
    },
  },
})
