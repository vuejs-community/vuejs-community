import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'crya-vite-plugin',
  description: 'A Vite plugin that writes a hot file while the dev server is running',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'crya',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/crya-vite-plugin',
  },
  source: {
    npm: 'crya-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
