import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'api-party',
  description: 'Securely connect to any API with a server proxy and dynamic composables',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/johannschopplich/nuxt-api-party',
    npm: 'https://npmjs.com/package/nuxt-api-party',
    website: 'https://nuxt-api-party.byjohann.dev/',
  },
  source: {
    github: 'johannschopplich/nuxt-api-party',
    npm: 'nuxt-api-party',
  },
  stats: {
    stars: 305,
    downloads: {
      monthly: 40257,
      weekly: 11457,
    },
  },
})
