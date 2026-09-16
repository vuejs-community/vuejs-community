import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@strato-css/vite',
  description: 'Vite integration for Strato CSS framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'strato-css',
    'vite',
    'vite-plugin',
    'css',
    'atomic-css',
  ],
  source: {
    npm: '@strato-css/vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@strato-css/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
