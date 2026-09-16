import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@leaflink/vite-plugin-importmap',
  description: 'Vite plugin to allow loading dependencies via native import maps',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'importmap',
  ],
  source: {
    npm: '@leaflink/vite-plugin-importmap',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@leaflink/vite-plugin-importmap',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
