import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'whooksh',
  description: 'Webhook forwarding for local development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'webhook',
    'tunnel',
    'development',
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/whooksh',
  },
  source: {
    npm: 'whooksh',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 29,
      weekly: 2,
    },
  },
})
