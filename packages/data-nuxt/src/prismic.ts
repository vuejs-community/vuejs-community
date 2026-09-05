import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'prismic',
  description: 'Easily connect your Nuxt application to your content hosted on Prismic',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/prismic',
    npm: 'https://npmjs.com/package/@nuxtjs/prismic',
    website: 'https://prismic.nuxtjs.org',
  },
  source: {
    github: 'nuxt-modules/prismic',
    npm: '@nuxtjs/prismic',
  },
  stats: {
    stars: 249,
    downloads: {
      monthly: 24667,
      weekly: 6945,
    },
  },
})
