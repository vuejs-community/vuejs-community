import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sanity',
  description: 'Access text, images, and other media with Nuxt and the Sanity headless CMS.',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/sanity',
    npm: 'https://npmjs.com/package/@nuxtjs/sanity',
    website: 'https://sanity.nuxtjs.org',
  },
  source: {
    github: 'nuxt-modules/sanity#main',
    npm: '@nuxtjs/sanity',
  },
  stats: {
    stars: 264,
    downloads: {
      monthly: 34196,
      weekly: 8391,
    },
  },
})
