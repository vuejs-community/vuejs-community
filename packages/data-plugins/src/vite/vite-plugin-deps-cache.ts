import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-deps-cache',
  description: 'Cache optimized dependencies continuously',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'pre-bundle',
    'optimize',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-deps-cache',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 0,
    },
  },
})
