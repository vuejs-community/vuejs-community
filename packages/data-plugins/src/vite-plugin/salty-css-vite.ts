import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@salty-css/vite',
  description: 'Vite plugin for Salty CSS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'salty-css',
    'css-in-js',
    'vite',
    'vite-plugin',
    'css',
    'styling',
  ],
  source: {
    github: 'margarita-form/salty-css',
    npm: '@salty-css/vite',
  },
  links: {
    github: 'https://github.com/margarita-form/salty-css',
    npm: 'https://www.npmjs.com/package/@salty-css/vite',
    website: 'https://salty-css.dev/',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 2093,
      weekly: 73,
    },
  },
})
