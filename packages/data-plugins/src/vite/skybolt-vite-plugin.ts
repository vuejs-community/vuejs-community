import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@skybolt/vite-plugin',
  description: 'Vite plugin for Skybolt - High-performance asset caching for multi-page applications',
  version: '3.5.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'skybolt',
    'caching',
    'service-worker',
    'performance',
    'assets',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/JensRoland/skybolt',
    npm: 'https://www.npmjs.com/package/@skybolt/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 9,
    },
  },
})
