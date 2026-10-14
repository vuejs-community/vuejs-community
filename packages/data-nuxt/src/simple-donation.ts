import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'simple-donation',
  description: 'A customizable PayPal donation module for Nuxt 3 and Nuxt 4 projects',
  icon: 'icon:simple-donation',
  category: 'nuxt',
  types: [
    'Payment',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/giovannimanetti11/Simple-donation',
    npm: 'https://npmjs.com/package/simple-donation',
    website: 'https://github.com/giovannimanetti11/Simple-donation',
  },
  source: {
    github: 'giovannimanetti11/Simple-donation',
    npm: 'simple-donation',
  },
})
