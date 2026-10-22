import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'medusa',
  description: 'Easily connect to Medusa',
  icon: 'icon:medusa',
  category: 'nuxt',
  types: [
    'Ecommerce & Payments',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/medusa',
    npm: 'https://npmjs.com/package/@nuxtjs/medusa',
    website: 'https://nuxt-medusa.vercel.app/',
  },
  source: {
    github: 'nuxt-modules/medusa',
    npm: '@nuxtjs/medusa',
  },
})
