import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-file-storage',
  description: 'Easy solution to store files in your nuxt apps. Upload files from the frontend and recieve them from the backend to save the files in your project.',
  icon: 'icon:nuxt-file-storage',
  category: 'nuxt',
  types: [
    'Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nyllre/nuxt-file-storage',
    npm: 'https://npmjs.com/package/nuxt-file-storage',
    website: 'https://github.com/nyllre/nuxt-file-storage',
  },
  source: {
    github: 'nyllre/nuxt-file-storage',
    npm: 'nuxt-file-storage',
  },
  stats: {
    stars: 107,
    downloads: {
      monthly: 3286,
      weekly: 771,
    },
  },
})
