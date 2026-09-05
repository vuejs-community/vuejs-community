import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'date-fns',
  description: 'Modern JavaScript date utility library - date-fns for Nuxt',
  category: 'nuxt',
  types: [
    'Date',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/date-fns-module',
    npm: 'https://npmjs.com/package/@nuxtjs/date-fns',
    website: 'https://github.com/nuxt-community/date-fns-module',
  },
  source: {
    github: 'nuxt-community/date-fns-module',
    npm: '@nuxtjs/date-fns',
  },
  stats: {
    stars: 77,
    downloads: {
      monthly: 8531,
      weekly: 1965,
    },
  },
})
