import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@casablanca-css/core',
  description: 'Zero-Runtime CSS-in-JS powered by vite.',
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
    github: 'tkamenoko/casablanca-css',
    npm: '@casablanca-css/core',
  },
  links: {
    github: 'https://github.com/tkamenoko/casablanca-css',
    npm: 'https://www.npmjs.com/package/@casablanca-css/core',
    website: 'https://github.com/tkamenoko/casablanca-css#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
