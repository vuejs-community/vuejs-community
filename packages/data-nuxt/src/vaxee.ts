import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vaxee',
  description: 'The State Manager for Vue 3',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/letstri/vaxee',
    npm: 'https://npmjs.com/package/@vaxee/nuxt',
    website: 'https://vaxee.letstri.dev/',
  },
  source: {
    github: 'letstri/vaxee#main/packages/nuxt',
    npm: '@vaxee/nuxt',
  },
  stats: {
    stars: 74,
    downloads: {
      monthly: 152,
      weekly: 20,
    },
  },
})
