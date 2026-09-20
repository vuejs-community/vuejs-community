import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-dotenv',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/chris-zhu/unplugin-vue-dotenv',
    npm: 'https://www.npmjs.com/package/unplugin-vue-dotenv',
    website: 'https://github.com/chris-zhu/unplugin-vue-dotenv#readme',
  },
  source: {
    github: 'chris-zhu/unplugin-vue-dotenv',
    npm: 'unplugin-vue-dotenv',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 31,
      weekly: 5,
    },
  },
})
