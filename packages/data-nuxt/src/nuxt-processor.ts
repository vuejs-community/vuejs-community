import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'nuxt-processor',
  description: 'Decoupled processing for Nuxt backed by BullMQ.',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/aidanhibbard/nuxt-processor',
    npm: 'https://npmjs.com/package/nuxt-processor',
    website: 'https://github.com/aidanhibbard/nuxt-processor',
  },
  source: {
    github: 'aidanhibbard/nuxt-processor',
    npm: 'nuxt-processor',
  },
  stats: {
    stars: 50,
    downloads: {
      monthly: 16257,
      weekly: 2006,
    },
  },
})
