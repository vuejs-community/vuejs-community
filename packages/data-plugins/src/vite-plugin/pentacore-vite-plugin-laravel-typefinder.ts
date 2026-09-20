import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pentacore/vite-plugin-laravel-typefinder',
  description: 'Vite plugin for Laravel Typefinder — auto-generate TypeScript types from Models, Enums, Casts, and Requests.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'laravel',
    'typescript',
    'types',
  ],
  links: {
    github: 'https://github.com/pentacore/laravel-typefinder',
    npm: 'https://www.npmjs.com/package/@pentacore/vite-plugin-laravel-typefinder',
    website: 'https://github.com/pentacore/laravel-typefinder',
  },
  source: {
    github: 'pentacore/laravel-typefinder',
    npm: '@pentacore/vite-plugin-laravel-typefinder',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 115,
      weekly: 34,
    },
  },
})
