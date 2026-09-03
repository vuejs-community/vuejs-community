import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'whooksh',
  description: 'Webhook forwarding for local development',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'webhook',
    'tunnel',
    'development',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/whooksh',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 4,
    },
  },
})
