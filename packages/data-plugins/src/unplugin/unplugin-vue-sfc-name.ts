import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-sfc-name',
  description: 'Extending the vue script setup syntactic sugar',
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
    github: 'https://github.com/elonehoo/unplugin-vue-sfc-name',
    npm: 'https://www.npmjs.com/package/unplugin-vue-sfc-name',
    website: 'https://github.com/elonehoo/unplugin-vue-sfc-name#readme',
  },
  source: {
    github: 'elonehoo/unplugin-vue-sfc-name',
    npm: 'unplugin-vue-sfc-name',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 45,
      weekly: 9,
    },
  },
})
