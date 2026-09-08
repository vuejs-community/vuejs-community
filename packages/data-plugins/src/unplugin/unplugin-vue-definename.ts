import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-definename',
  description: 'use defineName macro in <script setup> project',
  icon: 'icon:dark-unplugin',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'defineName',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'ray-d-song/unplugin-vue-definename',
    npm: 'unplugin-vue-definename',
  },
  links: {
    github: 'https://github.com/ray-d-song/unplugin-vue-definename',
    npm: 'https://www.npmjs.com/package/unplugin-vue-definename',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
