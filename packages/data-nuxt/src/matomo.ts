import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'matomo',
  description: 'Add Matomo analytics to your nuxt.js application. This plugin automatically sends first page and route change events to matomo',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/pimlie/nuxt-matomo',
    npm: 'https://npmjs.com/package/nuxt-matomo',
    website: 'https://github.com/pimlie/nuxt-matomo',
  },
  source: {
    github: 'pimlie/nuxt-matomo',
    npm: 'nuxt-matomo',
  },
  stats: {
    stars: 86,
    downloads: {
      monthly: 907,
      weekly: 203,
    },
  },
})
