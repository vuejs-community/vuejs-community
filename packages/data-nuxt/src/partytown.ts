import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'partytown',
  description: 'Partytown integration for Nuxt - relocate resource intensive scripts into a web worker, and off of the main thread.',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/partytown',
    npm: 'https://npmjs.com/package/@nuxtjs/partytown',
    website: 'https://github.com/nuxt-modules/partytown',
  },
  source: {
    github: 'nuxt-modules/partytown',
    npm: '@nuxtjs/partytown',
  },
  stats: {
    stars: 355,
    downloads: {
      monthly: 16183,
      weekly: 3885,
    },
  },
})
