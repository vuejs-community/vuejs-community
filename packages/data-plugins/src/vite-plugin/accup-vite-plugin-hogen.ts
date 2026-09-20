import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@accup/vite-plugin-hogen',
  description: 'Vite plugin for emitting assets from TypeScript files matched by user-defined rules.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dynamic asset',
    'meta programming',
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@accup/vite-plugin-hogen',
  },
  source: {
    npm: '@accup/vite-plugin-hogen',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 4,
    },
  },
})
