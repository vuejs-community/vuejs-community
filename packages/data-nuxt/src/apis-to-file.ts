import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'apis-to-file',
  description: 'Build module to merge and transform multiple API and GraphQL requests into a single one and loaded only when needed, like a payload extractor',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Luxdamore/nuxt-apis-to-file',
    npm: 'https://npmjs.com/package/@luxdamore/nuxt-apis-to-file',
    website: 'https://luxdamore.github.io/nuxt-apis-to-file/',
  },
  source: {
    github: 'Luxdamore/nuxt-apis-to-file',
    npm: '@luxdamore/nuxt-apis-to-file',
  },
  stats: {
    stars: 26,
    downloads: {
      monthly: 108,
      weekly: 18,
    },
  },
})
