import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'strapi',
  description: 'Design APIs fast and manage content easily using REST or GraphQL.',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/strapi',
    npm: 'https://npmjs.com/package/@nuxtjs/strapi',
    website: 'https://strapi.nuxtjs.org',
  },
  source: {
    github: 'nuxt-modules/strapi',
    npm: '@nuxtjs/strapi',
  },
  stats: {
    stars: 716,
    downloads: {
      monthly: 17828,
      weekly: 4630,
    },
  },
})
