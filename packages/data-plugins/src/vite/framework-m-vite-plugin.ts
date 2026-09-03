import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@framework-m/vite-plugin',
  description: 'Vite plugin for Framework M plugin auto-discovery and bundling',
  version: '0.11.5',
  category: 'plugin',
  tags: [
    'framework-m',
    'vite-plugin',
    'plugin-discovery',
    'multi-app',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@framework-m/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 1113,
      weekly: 355,
    },
  },
})
