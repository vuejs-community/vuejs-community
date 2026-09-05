import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'planship',
  description: 'Entitlements, metering, plan packaging, and subscription management for Nuxt apps.',
  category: 'nuxt',
  types: [
    'Payment',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/planship/planship-nuxt',
    npm: 'https://npmjs.com/package/@planship/nuxt',
    website: 'https://planship.io',
  },
  source: {
    github: 'planship/planship-nuxt',
    npm: '@planship/nuxt',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 207,
      weekly: 26,
    },
  },
})
