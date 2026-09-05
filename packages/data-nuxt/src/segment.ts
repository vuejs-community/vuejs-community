import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'segment',
  description: 'Nuxt module for Segment Analytics.js',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/dansmaculotte/nuxt-segment',
    npm: 'https://npmjs.com/package/@dansmaculotte/nuxt-segment',
    website: 'https://github.com/dansmaculotte/nuxt-segment',
  },
  source: {
    github: 'dansmaculotte/nuxt-segment',
    npm: '@dansmaculotte/nuxt-segment',
  },
  stats: {
    stars: 20,
    downloads: {
      monthly: 915,
      weekly: 171,
    },
  },
})
