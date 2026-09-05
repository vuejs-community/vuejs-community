import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'auth',
  description: 'Zero-boilerplate authentication support for Nuxt.',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/auth-module',
    npm: 'https://npmjs.com/package/@nuxtjs/auth',
    website: 'https://dev.auth.nuxtjs.org/',
  },
  source: {
    github: 'nuxt-community/auth-module',
    npm: '@nuxtjs/auth',
  },
  stats: {
    stars: 1924,
    downloads: {
      monthly: 33723,
      weekly: 8502,
    },
  },
})
