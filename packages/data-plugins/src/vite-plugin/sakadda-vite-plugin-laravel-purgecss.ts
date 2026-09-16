import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sakadda/vite-plugin-laravel-purgecss',
  description: 'Purges CSS for laravel-vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
  ],
  source: {
    github: 'sakadda/vite-plugin-laravel-purgecss',
    npm: '@sakadda/vite-plugin-laravel-purgecss',
  },
  links: {
    github: 'https://github.com/sakadda/vite-plugin-laravel-purgecss',
    npm: 'https://www.npmjs.com/package/@sakadda/vite-plugin-laravel-purgecss',
    website: 'https://github.com/sakadda/vite-plugin-laravel-purgecss#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 171,
      weekly: 23,
    },
  },
})
