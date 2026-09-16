import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@velite/plugin-vite',
  description: 'Vite plugin for integrating Velite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'velite',
    'content',
  ],
  source: {
    npm: '@velite/plugin-vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@velite/plugin-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 161,
      weekly: 31,
    },
  },
})
