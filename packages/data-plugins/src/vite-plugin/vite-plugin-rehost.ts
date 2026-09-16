import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rehost',
  description: 'Self-hosted resources from index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'alloc/vite-plugin-rehost',
    npm: 'vite-plugin-rehost',
  },
  links: {
    github: 'https://github.com/alloc/vite-plugin-rehost',
    npm: 'https://www.npmjs.com/package/vite-plugin-rehost',
    website: 'https://github.com/alloc/vite-plugin-rehost#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
