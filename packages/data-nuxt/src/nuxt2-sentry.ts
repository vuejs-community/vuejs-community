import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt2-sentry',
  description: 'Sentry module for Nuxt to help developers diagnose, fix, and optimize the performance of their code',
  category: 'nuxt',
  types: [
    'Monitoring',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/sentry-module',
    npm: 'https://npmjs.com/package/@nuxtjs/sentry',
    website: 'https://sentry.nuxtjs.org/',
  },
  source: {
    github: 'nuxt-community/sentry-module',
    npm: '@nuxtjs/sentry',
  },
  stats: {
    stars: 498,
    downloads: {
      monthly: 127810,
      weekly: 32047,
    },
  },
})
