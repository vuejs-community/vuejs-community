import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-dotenv',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'chris-zhu/unplugin-vue-dotenv',
    npm: 'unplugin-vue-dotenv',
  },
  links: {
    github: 'https://github.com/chris-zhu/unplugin-vue-dotenv',
    npm: 'https://www.npmjs.com/package/unplugin-vue-dotenv',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 12,
    },
  },
})
