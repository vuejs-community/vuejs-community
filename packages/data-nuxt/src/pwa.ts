import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pwa',
  description: 'Easily build a Progressive Web App for your Nuxt application to improve your app\'s performance.',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/pwa-module',
    npm: 'https://npmjs.com/package/@nuxtjs/pwa',
    website: 'https://pwa.nuxtjs.org',
  },
  source: {
    github: 'nuxt-community/pwa-module',
    npm: '@nuxtjs/pwa',
  },
  stats: {
    stars: 1262,
    downloads: {
      monthly: 142893,
      weekly: 33516,
    },
  },
})
