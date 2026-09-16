import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-query-cache-busting',
  description: 'Vite plugin that busts caches with a query parameter instead of a filename hash.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cache',
    'cache-busting',
    'vite',
    'vite-plugin',
    'vitejs',
  ],
  source: {
    github: 'mokume3/vite-plugin-query-cache-busting',
    npm: 'vite-plugin-query-cache-busting',
  },
  links: {
    github: 'https://github.com/mokume3/vite-plugin-query-cache-busting',
    npm: 'https://www.npmjs.com/package/vite-plugin-query-cache-busting',
    website: 'https://github.com/mokume3/vite-plugin-query-cache-busting#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 50,
      weekly: 4,
    },
  },
})
