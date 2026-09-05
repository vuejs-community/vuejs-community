import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'seomatic-meta',
  description: 'A Nuxt module connecting Nuxt to the Craft CMS SEOmatic plugin',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/ben-rogerson/nuxt-seomatic-meta',
    npm: 'https://npmjs.com/package/nuxt-seomatic-meta',
    website: 'https://github.com/ben-rogerson/nuxt-seomatic-meta',
  },
  source: {
    github: 'ben-rogerson/nuxt-seomatic-meta',
    npm: 'nuxt-seomatic-meta',
  },
  stats: {
    stars: 32,
    downloads: {
      monthly: 510,
      weekly: 119,
    },
  },
})
