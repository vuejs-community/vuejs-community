import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jqhtml/vite-plugin',
  description: 'Vite plugin for jqhtml template compilation',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'jqhtml',
    'templates',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jqhtml/vite-plugin',
    npm: 'https://www.npmjs.com/package/@jqhtml/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 9,
    },
  },
})
