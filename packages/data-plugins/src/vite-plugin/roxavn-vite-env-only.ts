import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@roxavn/vite-env-only',
  description: 'Explicitly split up client and server code at the expression level',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'env',
    'only',
    'client',
    'server',
    'macro',
  ],
  links: {
    github: 'https://github.com/RoxaVN/vite-env-only',
    npm: 'https://www.npmjs.com/package/@roxavn/vite-env-only',
    website: 'https://github.com/RoxaVN/vite-env-only#readme',
  },
  source: {
    github: 'RoxaVN/vite-env-only',
    npm: '@roxavn/vite-env-only',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
