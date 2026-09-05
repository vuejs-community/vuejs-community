import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollbar',
  description: 'Nuxt 3 module to integrate Rollbar.',
  category: 'nuxt',
  types: [
    'Monitoring',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/jairoblatt/nuxt-rollbar',
    npm: 'https://npmjs.com/package/nuxt-rollbar',
    website: 'https://github.com/jairoblatt/nuxt-rollbar',
  },
  source: {
    github: 'jairoblatt/nuxt-rollbar',
    npm: 'nuxt-rollbar',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 1500,
      weekly: 304,
    },
  },
})
