import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pentacore/vite-plugin-laravel-typefinder',
  description: 'Vite plugin for Laravel Typefinder — auto-generate TypeScript types from Models, Enums, Casts, and Requests.',
  version: '5.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'laravel',
    'typescript',
    'types',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pentacore/laravel-typefinder',
    npm: 'https://www.npmjs.com/package/@pentacore/vite-plugin-laravel-typefinder',
  },
  stats: {
    downloads: {
      monthly: 199,
      weekly: 16,
    },
  },
})
