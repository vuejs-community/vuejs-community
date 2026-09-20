import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-image-test',
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
    'image',
  ],
  links: {
    github: 'https://github.com/chris-zhu/unplugin-vue-image',
    npm: 'https://www.npmjs.com/package/unplugin-vue-image-test',
    website: 'https://github.com/chris-zhu/unplugin-vue-image#readme',
  },
  source: {
    github: 'chris-zhu/unplugin-vue-image',
    npm: 'unplugin-vue-image-test',
  },
  stats: {
    stars: 38,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
