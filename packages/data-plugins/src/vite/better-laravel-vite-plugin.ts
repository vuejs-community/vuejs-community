import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'better-laravel-vite-plugin',
  description: 'Laravel plugin for Vite.',
  version: '0.7.4',
  category: 'plugin',
  tags: [
    'laravel',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/laravel/vite-plugin',
    npm: 'https://www.npmjs.com/package/better-laravel-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 12,
    },
  },
})
