import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@framework-m/vite-plugin',
  description: 'Vite plugin for Framework M plugin auto-discovery and bundling',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'framework-m',
    'vite-plugin',
    'plugin-discovery',
    'multi-app',
  ],
  source: {
    npm: '@framework-m/vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@framework-m/vite-plugin',
    website: 'https://gitlab.com/castlecraft/framework-m#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1051,
      weekly: 45,
    },
  },
})
