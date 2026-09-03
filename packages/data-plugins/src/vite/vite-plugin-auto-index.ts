import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-index',
  description: 'Automatically generate and update an index.js file in each specified path',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/leviat-tech/vite-plugin-auto-index',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-index',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 5,
    },
  },
})
