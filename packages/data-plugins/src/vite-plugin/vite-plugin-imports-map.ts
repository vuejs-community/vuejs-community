import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-imports-map',
  description: 'Inject import map with correct urls to hashed files into index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'imports map',
    'externals',
  ],
  source: {
    npm: 'vite-plugin-imports-map',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-imports-map',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
