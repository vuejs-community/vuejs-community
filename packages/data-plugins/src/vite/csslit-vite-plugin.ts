import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@csslit/vite-plugin',
  description: 'Vite plugin for compile-time csslit styles.',
  version: '0.0.9',
  category: 'plugin',
  tags: [
    'css',
    'css-in-js',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/csslit/csslit',
    npm: 'https://www.npmjs.com/package/@csslit/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 248,
      weekly: 177,
    },
  },
})
