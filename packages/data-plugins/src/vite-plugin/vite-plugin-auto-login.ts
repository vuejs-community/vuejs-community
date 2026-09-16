import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-login',
  description: 'Vite plugin for automatic login during development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'auto-login',
    'authentication',
  ],
  source: {
    npm: 'vite-plugin-auto-login',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-login',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 9,
    },
  },
})
