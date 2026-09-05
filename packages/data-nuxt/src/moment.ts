import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'moment',
  description: 'Efficient Moment.js module for Nuxt so you can Parse, validate, manipulate, and display dates and times in JavaScript.',
  category: 'nuxt',
  types: [
    'Date',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/moment-module',
    npm: 'https://npmjs.com/package/@nuxtjs/moment',
    website: 'https://github.com/nuxt-community/moment-module',
  },
  source: {
    github: 'nuxt-community/moment-module',
    npm: '@nuxtjs/moment',
  },
  stats: {
    stars: 194,
    downloads: {
      monthly: 57930,
      weekly: 14787,
    },
  },
})
