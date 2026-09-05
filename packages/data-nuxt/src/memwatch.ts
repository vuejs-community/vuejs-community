import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'memwatch',
  description: 'Quickly watch real-time memory stats of your nuxt app',
  category: 'nuxt',
  types: [
    'Monitoring',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/pimlie/nuxt-memwatch',
    npm: 'https://npmjs.com/package/nuxt-memwatch',
    website: 'https://github.com/pimlie/nuxt-memwatch',
  },
  source: {
    github: 'pimlie/nuxt-memwatch',
    npm: 'nuxt-memwatch',
  },
  stats: {
    stars: 86,
    downloads: {
      monthly: 741,
      weekly: 105,
    },
  },
})
