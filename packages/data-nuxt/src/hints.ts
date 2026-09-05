import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'hints',
  description: 'Nuxt module that shows hints for aspects of your application such as Performance, Security, and more!',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/hints',
    npm: 'https://npmjs.com/package/@nuxt/hints',
    website: 'https://github.com/nuxt/hints',
  },
  source: {
    github: 'nuxt/hints',
    npm: '@nuxt/hints',
  },
  stats: {
    stars: 344,
    downloads: {
      monthly: 165376,
      weekly: 46878,
    },
  },
})
