import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-resolve-types',
  description: 'Resolve script setup defineProps types to runtime props in Vue SFC',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aibayanyu20/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-resolve-types',
  },
  stats: {
    downloads: {
      monthly: 70,
      weekly: 22,
    },
  },
})
