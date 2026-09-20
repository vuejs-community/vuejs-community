import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-pages',
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
    github: 'https://github.com/linhuibin98/unplugin-vue-pages',
    npm: 'https://www.npmjs.com/package/unplugin-vue-pages',
    website: 'https://github.com/linhuibin98/unplugin-vue-pages#readme',
  },
  source: {
    github: 'linhuibin98/unplugin-vue-pages',
    npm: 'unplugin-vue-pages',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 6,
    },
  },
})
