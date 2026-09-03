import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@accup/vite-plugin-hogen',
  description: 'Vite plugin for emitting assets from TypeScript files matched by user-defined rules.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'dynamic asset',
    'meta programming',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@accup/vite-plugin-hogen',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 8,
    },
  },
})
