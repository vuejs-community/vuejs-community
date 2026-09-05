import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'pinia-colada',
  description: 'The smart data fetching layer for Pinia',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/posva/pinia-colada',
    npm: 'https://npmjs.com/package/@pinia/colada-nuxt',
    website: 'https://pinia-colada.esm.dev',
  },
  source: {
    github: 'posva/pinia-colada#main/nuxt',
    npm: '@pinia/colada-nuxt',
  },
  stats: {
    stars: 2230,
    downloads: {
      monthly: 97415,
      weekly: 25571,
    },
  },
})
