import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'paypal',
  description: 'A Nuxt module for simplifying the use of Paypal in your project.',
  category: 'nuxt',
  types: [
    'Payment',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nuxtaid/nuxt-paypal',
    npm: 'https://npmjs.com/package/nuxt-paypal',
    website: 'https://github.com/nuxtaid/nuxt-paypal#readme',
  },
  source: {
    github: 'nuxtaid/nuxt-paypal',
    npm: 'nuxt-paypal',
  },
  stats: {
    stars: 17,
    downloads: {
      monthly: 1767,
      weekly: 529,
    },
  },
})
