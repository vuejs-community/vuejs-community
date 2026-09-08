import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rehost',
  description: 'Self-hosted resources from index.html',
  icon: 'logos:vite-icon',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'alloc/vite-plugin-rehost',
    npm: 'vite-plugin-rehost',
  },
  links: {
    github: 'https://github.com/alloc/vite-plugin-rehost',
    npm: 'https://www.npmjs.com/package/vite-plugin-rehost',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 3,
    },
  },
})
