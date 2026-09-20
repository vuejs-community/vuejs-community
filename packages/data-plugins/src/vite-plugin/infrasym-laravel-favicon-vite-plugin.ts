import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@infrasym/laravel-favicon-vite-plugin',
  description: 'A simple favicon generator for Laravel projects using Vite 3+.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'blade',
    'laravel',
    'favicon',
    'icons',
    'generator',
  ],
  links: {
    github: 'https://github.com/infrasym/laravel-favicon-vite-plugin',
    npm: 'https://www.npmjs.com/package/@infrasym/laravel-favicon-vite-plugin',
    website: 'https://github.com/infrasym/laravel-favicon-vite-plugin#readme',
  },
  source: {
    github: 'infrasym/laravel-favicon-vite-plugin',
    npm: '@infrasym/laravel-favicon-vite-plugin',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 46,
      weekly: 9,
    },
  },
})
