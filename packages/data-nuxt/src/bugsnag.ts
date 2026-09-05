import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bugsnag',
  description: 'Bugsnag integration for nuxt.js. Makes it easy to add bugsnag to your Project. Supports uploading source maps.',
  category: 'nuxt',
  types: [
    'Monitoring',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/JulianMar/nuxt-bugsnag',
    npm: 'https://npmjs.com/package/nuxt-bugsnag',
    website: 'https://github.com/JulianMar/nuxt-bugsnag',
  },
  source: {
    github: 'JulianMar/nuxt-bugsnag',
    npm: 'nuxt-bugsnag',
  },
  stats: {
    stars: 49,
    downloads: {
      monthly: 18528,
      weekly: 4014,
    },
  },
})
