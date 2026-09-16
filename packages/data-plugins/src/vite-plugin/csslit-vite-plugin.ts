import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@csslit/vite-plugin',
  description: 'Vite plugin for compile-time csslit styles.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'css-in-js',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'csslit/csslit',
    npm: '@csslit/vite-plugin',
  },
  links: {
    github: 'https://github.com/csslit/csslit',
    npm: 'https://www.npmjs.com/package/@csslit/vite-plugin',
    website: 'https://github.com/csslit/csslit#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 371,
      weekly: 19,
    },
  },
})
