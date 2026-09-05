import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'query-api',
  description: 'Provides simple ways to query data from Craft CMS.',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/samuelreichor/query-api',
    npm: 'https://npmjs.com/package/@query-api/nuxt',
    website: 'https://samuelreichor.at/libraries/nuxt-craftcms',
  },
  source: {
    github: 'samuelreichor/query-api#HEAD/packages/nuxt',
    npm: '@query-api/nuxt',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 278,
      weekly: 30,
    },
  },
})
