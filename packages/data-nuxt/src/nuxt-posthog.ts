import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-posthog',
  description: 'Integrate PostHog into your application with minimal configuration',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/mitjans/nuxt-posthog',
    npm: 'https://npmjs.com/package/nuxt-posthog',
    website: 'https://nuxt-posthog.cmitjans.dev',
  },
  source: {
    github: 'mitjans/nuxt-posthog',
    npm: 'nuxt-posthog',
  },
  stats: {
    stars: 51,
    downloads: {
      monthly: 11314,
      weekly: 3706,
    },
  },
})
