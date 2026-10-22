import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'paypal',
  description: 'Simplify the use of PayPal.',
  icon: 'icon:paypal',
  category: 'nuxt',
  types: [
    'Ecommerce & Payments',
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
})
