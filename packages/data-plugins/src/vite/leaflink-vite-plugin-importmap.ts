import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@leaflink/vite-plugin-importmap',
  description: 'Vite plugin to allow loading dependencies via native import maps',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'importmap',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@leaflink/vite-plugin-importmap',
  },
  stats: {
    downloads: {
      monthly: 60,
      weekly: 5,
    },
  },
})
