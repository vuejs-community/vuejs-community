import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mailpit',
  description: 'Integrates Mailpit web UI in Nuxt devtools',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/tdolsen/nuxt-mailpit',
    npm: 'https://npmjs.com/package/nuxt-mailpit',
    website: 'https://github.com/tdolsen/nuxt-mailpit',
  },
  source: {
    github: 'tdolsen/nuxt-mailpit',
    npm: 'nuxt-mailpit',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 762,
      weekly: 125,
    },
  },
})
