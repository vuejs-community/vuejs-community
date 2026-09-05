import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'stonecrop',
  description: 'Stonecrop for Nuxt',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/agritheory/stonecrop',
    npm: 'https://npmjs.com/package/@stonecrop/nuxt',
    website: 'https://stonecrop.io/',
  },
  source: {
    github: 'agritheory/stonecrop#development/nuxt',
    npm: '@stonecrop/nuxt',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 2951,
      weekly: 581,
    },
  },
})
