import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vueuse-gesture',
  description: '🕹 Vue Composables making your app interactive',
  icon: 'logos:vueuse',
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
      monthly: 208485,
      weekly: 47610,
    },
  },
})
