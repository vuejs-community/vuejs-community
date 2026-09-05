import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'polar',
  description: 'Polar.sh integration for Nuxt',
  category: 'nuxt',
  types: [
    'Payment',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/polarsource/polar-adapters',
    npm: 'https://npmjs.com/package/@polar-sh/nuxt',
    website: 'https://polar.sh/docs/integrate/sdk/adapters/nuxt',
  },
  source: {
    github: 'polarsource/polar-adapters#main/packages/polar-nuxt',
    npm: '@polar-sh/nuxt',
  },
  stats: {
    stars: 145,
    downloads: {
      monthly: 782,
      weekly: 195,
    },
  },
})
