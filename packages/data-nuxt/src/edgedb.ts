import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'edgedb',
  description: 'Integrate Nuxt 3 with EdgeDB effortlessly, adding a robust database layer to your app with minimal configuration.',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Tahul/nuxt-edgedb',
    npm: 'https://npmjs.com/package/nuxt-edgedb-module',
    website: 'https://github.com/Tahul/nuxt-edgedb',
  },
  source: {
    github: 'Tahul/nuxt-edgedb',
    npm: 'nuxt-edgedb-module',
  },
  stats: {
    stars: 73,
    downloads: {
      monthly: 322,
      weekly: 73,
    },
  },
})
