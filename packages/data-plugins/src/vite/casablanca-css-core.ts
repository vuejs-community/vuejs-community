import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@casablanca-css/core',
  description: 'Zero-Runtime CSS-in-JS powered by vite.',
  version: '1.0.0',
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
    github: 'https://github.com/tkamenoko/casablanca-css',
    npm: 'https://www.npmjs.com/package/@casablanca-css/core',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 7,
    },
  },
})
