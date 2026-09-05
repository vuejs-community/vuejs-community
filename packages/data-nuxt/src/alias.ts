import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'alias',
  description: 'It automatically creates an alias for the components and page of the path',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/kdydesign/nuxt-alias-module',
    npm: 'https://npmjs.com/package/nuxt-alias',
    website: 'https://github.com/kdydesign/nuxt-alias-module',
  },
  source: {
    github: 'kdydesign/nuxt-alias-module',
    npm: 'nuxt-alias',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 68,
      weekly: 17,
    },
  },
})
