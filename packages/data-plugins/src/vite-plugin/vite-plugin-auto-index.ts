import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-index',
  description: 'Automatically generate and update an index.js file in each specified path',
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
    github: 'https://github.com/leviat-tech/vite-plugin-auto-index',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-index',
    website: 'https://github.com/leviat-tech/vite-plugin-auto-index#readme',
  },
  source: {
    github: 'leviat-tech/vite-plugin-auto-index',
    npm: 'vite-plugin-auto-index',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
