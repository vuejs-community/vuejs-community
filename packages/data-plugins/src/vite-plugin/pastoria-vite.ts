import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pastoria/vite',
  description: 'Vite plugin for Pastoria apps',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    npm: '@pastoria/vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@pastoria/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 4,
    },
  },
})
