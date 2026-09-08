import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-imports-map',
  description: 'Inject import map with correct urls to hashed files into index.html',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-imports-map',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-imports-map',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
