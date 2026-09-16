import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@erbelion/vite-plugin-laravel-purgecss',
  description: 'A Vite plugin that integrates PurgeCSS with Laravel template assets.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
    'laravel',
  ],
  source: {
    github: 'erbelion/vite-plugin-laravel-purgecss',
    npm: '@erbelion/vite-plugin-laravel-purgecss',
  },
  links: {
    github: 'https://github.com/erbelion/vite-plugin-laravel-purgecss',
    npm: 'https://www.npmjs.com/package/@erbelion/vite-plugin-laravel-purgecss',
    website: 'https://github.com/erbelion/vite-plugin-laravel-purgecss#readme',
  },
  stats: {
    stars: 27,
    downloads: {
      monthly: 5656,
      weekly: 546,
    },
  },
})
