import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'onyx',
  description: 'A design system and Vue.js component library created by Schwarz Digits',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/SchwarzIT/onyx',
    npm: 'https://npmjs.com/package/@sit-onyx/nuxt',
    website: 'https://onyx.schwarz/development/packages/nuxt.html',
  },
  source: {
    github: 'SchwarzIT/onyx#main/packages/nuxt',
    npm: '@sit-onyx/nuxt',
  },
  stats: {
    stars: 123,
    downloads: {
      monthly: 6154,
      weekly: 518,
    },
  },
})
