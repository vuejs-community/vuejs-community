import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'sidebase-auth',
  description: 'Zero-boilerplate authentication for Nuxt with support for many strategies (oauth, credentials, ...) and providers (google, azure, ...). Additionally supports session manipulation, client- and server-side protection and more.',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/sidebase/nuxt-auth',
    npm: 'https://npmjs.com/package/@sidebase/nuxt-auth',
    website: 'https://auth.sidebase.io/',
  },
  source: {
    github: 'sidebase/nuxt-auth',
    npm: '@sidebase/nuxt-auth',
  },
  stats: {
    stars: 1549,
    downloads: {
      monthly: 212530,
      weekly: 43752,
    },
  },
})
