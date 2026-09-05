import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'xhr-cache',
  description: 'Cache api resources and serve it as static resource',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/gaetansenn/xhr-cache',
    npm: 'https://npmjs.com/package/@dewib/xhr-cache',
    website: 'https://xhr-cache.dewib.com',
  },
  source: {
    github: 'gaetansenn/xhr-cache',
    npm: '@dewib/xhr-cache',
  },
  stats: {
    stars: 26,
    downloads: {
      monthly: 170,
      weekly: 23,
    },
  },
})
