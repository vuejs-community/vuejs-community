import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'appwrite',
  description: 'Appwrite module for Nuxt',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Hrdtr/nuxt-appwrite',
    npm: 'https://npmjs.com/package/nuxt-appwrite',
    website: 'https://github.com/Hrdtr/nuxt-appwrite',
  },
  source: {
    github: 'Hrdtr/nuxt-appwrite',
    npm: 'nuxt-appwrite',
  },
  stats: {
    stars: 65,
    downloads: {
      monthly: 339,
      weekly: 77,
    },
  },
})
