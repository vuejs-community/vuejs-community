import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-definename',
  description: 'use defineName macro in <script setup> project',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'defineName',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/ray-d-song/unplugin-vue-definename',
    npm: 'https://www.npmjs.com/package/unplugin-vue-definename',
    website: 'https://github.com/ray-d-song/unplugin-vue-definename',
  },
  source: {
    github: 'ray-d-song/unplugin-vue-definename',
    npm: 'unplugin-vue-definename',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
