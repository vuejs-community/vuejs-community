import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nadi.js/vite-plugin',
  description: 'Vite plugin for Nadi framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nadi',
    'nadijs',
    'vite',
    'vite-plugin',
    'plugin',
  ],
  source: {
    npm: '@nadi.js/vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@nadi.js/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
