import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gustcss/vite',
  description: 'Vite plugin for GustCSS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'gustcss',
    'gust',
    'css',
    'utility',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@gustcss/vite',
  },
  source: {
    npm: '@gustcss/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 460,
      weekly: 13,
    },
  },
})
