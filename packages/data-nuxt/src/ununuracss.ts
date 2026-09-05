import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'ununuracss',
  description: 'A Real CSS Engine. Only Scoped.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/betterwrite/ununuracss',
    npm: 'https://npmjs.com/package/nuxt-ununura',
    website: 'https://github.com/betterwrite/ununuracss',
  },
  source: {
    github: 'betterwrite/ununuracss#main/packages/nuxt',
    npm: 'nuxt-ununura',
  },
  stats: {
    stars: 44,
    downloads: {
      monthly: 221,
      weekly: 37,
    },
  },
})
