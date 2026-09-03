import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-definename',
  description: 'use defineName macro in <script setup> project',
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
