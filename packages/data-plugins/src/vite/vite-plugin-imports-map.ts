import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-imports-map',
  description: 'Inject import map with correct urls to hashed files into index.html',
  version: '1.0.9',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'imports map',
    'externals',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-imports-map',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
