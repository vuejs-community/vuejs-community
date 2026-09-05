import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'nuxt-actions',
  description: 'Type-safe server actions with Standard Schema validation, middleware, optimistic updates, streaming, and SSR queries',
  category: 'nuxt',
  types: [
    'Request',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/billymaulana/nuxt-actions',
    npm: 'https://npmjs.com/package/nuxt-actions',
    website: 'https://billymaulana.github.io/nuxt-actions/',
  },
  source: {
    github: 'billymaulana/nuxt-actions',
    npm: 'nuxt-actions',
  },
  stats: {
    stars: 21,
    downloads: {
      monthly: 209,
      weekly: 37,
    },
  },
})
