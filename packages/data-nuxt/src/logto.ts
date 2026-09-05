import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'logto',
  description: 'The better Nuxt auth module for developers.',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/logto-io/js',
    npm: 'https://npmjs.com/package/@logto/nuxt',
    website: 'https://logto.io',
  },
  source: {
    github: 'logto-io/js#master/packages/nuxt',
    npm: '@logto/nuxt',
  },
  stats: {
    stars: 96,
    downloads: {
      monthly: 3241,
      weekly: 900,
    },
  },
})
