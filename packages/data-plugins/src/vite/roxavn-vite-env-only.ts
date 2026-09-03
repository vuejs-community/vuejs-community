import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@roxavn/vite-env-only',
  description: 'Explicitly split up client and server code at the expression level',
  version: '2.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'env',
    'only',
    'client',
    'server',
    'macro',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/RoxaVN/vite-env-only',
    npm: 'https://www.npmjs.com/package/@roxavn/vite-env-only',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 6,
    },
  },
})
