import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'laravel-vite-plugin',
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
  source: {
    github: 'laravel/vite-plugin',
    npm: 'laravel-vite-plugin',
  },
  links: {
    github: 'https://github.com/laravel/vite-plugin',
    npm: 'https://www.npmjs.com/package/laravel-vite-plugin',
    website: 'https://github.com/laravel/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7573120,
      weekly: 1493146,
    },
  },
})
