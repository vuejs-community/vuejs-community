import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@malobre/vite-plugin-pages',
  description: 'Automatically look for inputs in `src/pages`',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    npm: '@malobre/vite-plugin-pages',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@malobre/vite-plugin-pages',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
