import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'seo-meta',
  description: 'Simple generate seo metadata',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/ihavecoke/nuxt-seo-meta',
    npm: 'https://npmjs.com/package/nuxt-seo-meta',
    website: 'https://github.com/ihavecoke/nuxt-seo-meta',
  },
  source: {
    github: 'ihavecoke/nuxt-seo-meta#main/packages/core',
    npm: 'nuxt-seo-meta',
  },
  stats: {
    stars: 43,
    downloads: {
      monthly: 121,
      weekly: 14,
    },
  },
})
