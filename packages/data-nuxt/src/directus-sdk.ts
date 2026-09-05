import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'directus-sdk',
  description: 'A Nuxt module for Directus with built-in authentication, realtime, file management, type generation, and visual editor support.',
  category: 'nuxt',
  types: [
    'CMS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/rolleyio/nuxt-directus-sdk',
    npm: 'https://npmjs.com/package/nuxt-directus-sdk',
    website: 'https://www.nuxt-directus-sdk.com/',
  },
  source: {
    github: 'rolleyio/nuxt-directus-sdk',
    npm: 'nuxt-directus-sdk',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 976,
      weekly: 133,
    },
  },
})
