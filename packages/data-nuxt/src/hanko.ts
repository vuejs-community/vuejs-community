import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'hanko',
  description: 'Hanko integration for Nuxt for passwordless authentication',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/hanko',
    npm: 'https://npmjs.com/package/@nuxtjs/hanko',
    website: 'https://github.com/nuxt-modules/hanko',
  },
  source: {
    github: 'nuxt-modules/hanko',
    npm: '@nuxtjs/hanko',
  },
  stats: {
    stars: 61,
    downloads: {
      monthly: 323,
      weekly: 61,
    },
  },
})
