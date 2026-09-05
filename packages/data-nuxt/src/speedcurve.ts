import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'speedcurve',
  description: 'Speedcurve LUX module for Nuxt',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/speedcurve-module',
    npm: 'https://npmjs.com/package/@nuxtjs/speedcurve',
    website: 'https://speedcurve.nuxtjs.org',
  },
  source: {
    github: 'nuxt-community/speedcurve-module',
    npm: '@nuxtjs/speedcurve',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 254,
      weekly: 48,
    },
  },
})
