import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'google-gtag',
  description: 'Google GTag for Nuxt',
  icon: '',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/google-gtag-module',
    npm: 'https://npmjs.com/package/@nuxtjs/google-gtag',
    website: 'https://github.com/nuxt-community/google-gtag-module',
  },
  source: {
    github: 'nuxt-community/google-gtag-module',
    npm: '@nuxtjs/google-gtag',
  },
  stats: {
    stars: 147,
    downloads: {
      monthly: 16645,
      weekly: 2574,
    },
  },
})
