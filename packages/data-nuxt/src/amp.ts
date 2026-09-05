import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'amp',
  description: 'AMP (Accelerated Mobile Pages) module for Nuxt',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/amp-module',
    npm: 'https://npmjs.com/package/@nuxtjs/amp',
    website: 'https://github.com/nuxt-community/amp-module',
  },
  source: {
    github: 'nuxt-community/amp-module',
    npm: '@nuxtjs/amp',
  },
  stats: {
    stars: 205,
    downloads: {
      monthly: 1179,
      weekly: 247,
    },
  },
})
