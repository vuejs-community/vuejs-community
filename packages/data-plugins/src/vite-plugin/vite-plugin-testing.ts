import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-testing',
  description: 'An example Vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-testing',
  },
  source: {
    npm: 'vite-plugin-testing',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 114,
      weekly: 16,
    },
  },
})
