import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-query-cache-busting',
  description: 'Vite plugin that busts caches with a query parameter instead of a filename hash.',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'cache',
    'cache-busting',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mokume3/vite-plugin-query-cache-busting',
    npm: 'https://www.npmjs.com/package/vite-plugin-query-cache-busting',
  },
  stats: {
    downloads: {
      monthly: 810,
      weekly: 10,
    },
  },
})
