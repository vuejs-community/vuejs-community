import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'medusa',
  description: 'Easily connect to Medusa from your Nuxt application',
  category: 'nuxt',
  types: [
    'Ecommerce',
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
  stats: {
    stars: 177,
    downloads: {
      monthly: 502,
      weekly: 110,
    },
  },
})
