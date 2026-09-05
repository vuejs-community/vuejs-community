import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'gtag',
  description: 'Google Analytics integration for Nuxt: Google Analytics, Google Ads and more',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/johannschopplich/nuxt-gtag',
    npm: 'https://npmjs.com/package/nuxt-gtag',
    website: 'https://github.com/johannschopplich/nuxt-gtag#readme',
  },
  source: {
    github: 'johannschopplich/nuxt-gtag',
    npm: 'nuxt-gtag',
  },
  stats: {
    stars: 376,
    downloads: {
      monthly: 289340,
      weekly: 77298,
    },
  },
})
