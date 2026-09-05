import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'nuxt-localtunnel',
  description: 'Exposes your Nuxt localhost to the world automatically.',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nuxtus/localtunnel',
    npm: 'https://npmjs.com/package/@nuxtus/nuxt-localtunnel',
    website: 'https://github.com/nuxtus/localtunnel',
  },
  source: {
    github: 'nuxtus/localtunnel',
    npm: '@nuxtus/nuxt-localtunnel',
  },
  stats: {
    stars: 22,
    downloads: {
      monthly: 406,
      weekly: 106,
    },
  },
})
