import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'shopline',
  description: 'shopline.js package',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'shopline',
    'agent',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/shopline',
  },
  source: {
    npm: 'shopline',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
