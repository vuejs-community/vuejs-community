import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'better-laravel-vite-plugin',
  description: 'Laravel plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'laravel',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/laravel/vite-plugin',
    npm: 'https://www.npmjs.com/package/better-laravel-vite-plugin',
    website: 'https://github.com/laravel/vite-plugin',
  },
  source: {
    github: 'laravel/vite-plugin',
    npm: 'better-laravel-vite-plugin',
  },
  stats: {
    stars: 902,
    downloads: {
      monthly: 30,
      weekly: 2,
    },
  },
})
