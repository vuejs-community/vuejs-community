import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'stripe',
  description: 'Import the StripeJS client script to accept payments, send payouts, and manage your businesses online.',
  category: 'nuxt',
  types: [
    'Payment',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/WilliamDASILVA/nuxt-stripe-module',
    npm: 'https://npmjs.com/package/nuxt-stripe-module',
    website: 'https://github.com/WilliamDASILVA/nuxt-stripe-module',
  },
  source: {
    github: 'WilliamDASILVA/nuxt-stripe-module',
    npm: 'nuxt-stripe-module',
  },
  stats: {
    stars: 114,
    downloads: {
      monthly: 2064,
      weekly: 543,
    },
  },
})
