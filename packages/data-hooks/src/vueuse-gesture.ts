import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vueuse-gesture',
  description: '手势交互 composables，支持拖拽、缩放、悬停等操作',
  category: 'hooks',
  types: ['composable-library'],
  tags: ['hooks', 'composables', 'gesture', 'interaction', 'vue3'],

  source: {
    github: 'vueuse/gesture',
    npm: '@vueuse/gesture',
  },

  links: {
    github: 'https://github.com/vueuse/gesture',
    npm: 'https://www.npmjs.com/package/@vueuse/gesture',
    website: 'https://gesture.vueuse.org',
  },

  stats: {
    stars: 403,
    downloads: {
      monthly: 230145,
      weekly: 62089,
    },
  },
})
