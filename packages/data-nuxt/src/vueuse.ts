import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vueuse',
  description: 'Collection of essential Vue Composition Utilities for Vue 2 and 3',
  icon: 'icon:vueuse',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vueuse/vueuse',
    npm: 'https://npmjs.com/package/@vueuse/nuxt',
    website: 'https://vueuse.org',
  },
  source: {
    github: 'vueuse/vueuse#main/packages/nuxt',
    npm: '@vueuse/nuxt',
  },
  stats: {
    stars: 22347,
    downloads: {
      monthly: 1973984,
      weekly: 477384,
    },
  },
})
