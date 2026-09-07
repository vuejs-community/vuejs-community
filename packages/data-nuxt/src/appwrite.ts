import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'appwrite',
  description: 'Appwrite module for Nuxt',
  icon: '',
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
      monthly: 294,
      weekly: 42,
    },
  },
})
