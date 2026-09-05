import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'gtm',
  description: 'Google Tag Manager Module for Nuxt',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/gtm-module',
    npm: 'https://npmjs.com/package/@nuxtjs/gtm',
    website: 'https://github.com/nuxt-community/gtm-module',
  },
  source: {
    github: 'nuxt-community/gtm-module',
    npm: '@nuxtjs/gtm',
  },
  stats: {
    stars: 344,
    downloads: {
      monthly: 124454,
      weekly: 27755,
    },
  },
})
