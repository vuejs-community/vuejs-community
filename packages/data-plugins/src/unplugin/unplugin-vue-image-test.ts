import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-image-test',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  version: '0.1.6-beta.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'image',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'chris-zhu/unplugin-vue-image',
    npm: 'unplugin-vue-image-test',
  },
  links: {
    github: 'https://github.com/chris-zhu/unplugin-vue-image',
    npm: 'https://www.npmjs.com/package/unplugin-vue-image-test',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
