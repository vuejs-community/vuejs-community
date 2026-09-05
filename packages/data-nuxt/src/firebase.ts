import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'firebase',
  description: 'Integrate Firebase into your Nuxt project.',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/firebase-module',
    npm: 'https://npmjs.com/package/@nuxtjs/firebase',
    website: 'https://firebase.nuxtjs.org',
  },
  source: {
    github: 'nuxt-community/firebase-module#master/packages/firebase-module',
    npm: '@nuxtjs/firebase',
  },
  stats: {
    stars: 637,
    downloads: {
      monthly: 14116,
      weekly: 3523,
    },
  },
})
