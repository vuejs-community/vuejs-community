import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ziggy-sync',
  description: 'Vite plugin to automatically sync and generate Ziggy routes in Laravel 11 projects using Vanilla JS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'laravel',
    'ziggy',
    'javascript',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-ziggy-sync',
  },
  source: {
    npm: 'vite-plugin-ziggy-sync',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 37,
      weekly: 2,
    },
  },
})
