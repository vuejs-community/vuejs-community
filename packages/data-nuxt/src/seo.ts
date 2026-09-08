import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'seo',
  description: 'The complete SEO solution for Nuxt.',
  icon: 'icon:nuxt',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/harlan-zw/nuxt-seo',
    npm: 'https://npmjs.com/package/@nuxtjs/seo',
    website: 'https://nuxtseo.com/',
  },
  source: {
    github: 'harlan-zw/nuxt-seo',
    npm: '@nuxtjs/seo',
  },
  stats: {
    stars: 1440,
    downloads: {
      monthly: 364376,
      weekly: 88819,
    },
  },
})
