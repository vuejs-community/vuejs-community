import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deps-cache',
  description: 'Cache optimized dependencies continuously',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'pre-bundle',
    'optimize',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-deps-cache',
  },
  source: {
    npm: 'vite-plugin-deps-cache',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
