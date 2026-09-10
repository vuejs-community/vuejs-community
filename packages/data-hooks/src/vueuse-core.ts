import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vueuse-core',
  description: 'Collection of essential Vue Composition Utilities for Vue 3',
  icon: 'logos:vueuse',
  category: 'hooks',
  types: ['composable-library'],
  tags: ['hooks', 'composables', 'vue3', 'vueuse'],

  source: {
    github: 'vueuse/vueuse',
    npm: '@vueuse/core',
  },

  links: {
    github: 'https://github.com/vueuse/vueuse',
    npm: 'https://www.npmjs.com/package/@vueuse/core',
    website: 'https://vueuse.org',
  },

  stats: {
    stars: 22349,
    downloads: {
      monthly: 41201074,
      weekly: 9924968,
    },
  },
})
