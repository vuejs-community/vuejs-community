import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'better-auth',
  description: 'Nuxt module for Better Auth integration with NuxtHub, route protection, session management, and role-based access',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/better-auth',
    npm: 'https://npmjs.com/package/@nuxtjs/better-auth',
    website: 'https://better-auth.nuxt.dev',
  },
  source: {
    github: 'nuxt-modules/better-auth',
    npm: '@nuxtjs/better-auth',
  },
  stats: {
    stars: 143,
    downloads: {
      monthly: 1739,
      weekly: 1189,
    },
  },
})
