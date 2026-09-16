import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@maxlee/vsh',
  description: 'vite.sh - Vite Plugin Service',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite.sh',
    'agent',
  ],
  source: {
    npm: '@maxlee/vsh',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@maxlee/vsh',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 5,
    },
  },
})
