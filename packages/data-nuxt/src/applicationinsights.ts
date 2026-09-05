import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'applicationinsights',
  description: 'AppInsights module for Nuxt',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/applicationinsights-module',
    npm: 'https://npmjs.com/package/@nuxtjs/applicationinsights',
    website: 'https://github.com/nuxt-community/applicationinsights-module',
  },
  source: {
    github: 'nuxt-community/applicationinsights-module',
    npm: '@nuxtjs/applicationinsights',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 2277,
      weekly: 504,
    },
  },
})
