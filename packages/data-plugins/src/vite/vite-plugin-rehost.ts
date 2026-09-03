import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rehost',
  description: 'Self-hosted resources from index.html',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/alloc/vite-plugin-rehost',
    npm: 'https://www.npmjs.com/package/vite-plugin-rehost',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 5,
    },
  },
})
