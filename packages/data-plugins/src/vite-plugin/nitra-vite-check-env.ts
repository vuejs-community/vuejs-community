import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nitra/vite-check-env',
  description: 'Vite.js plugin that makes build fail if a required environment variable(s) is missing',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'check-env',
    'env',
  ],
  links: {
    github: 'https://github.com/nitra/vite-check-env',
    npm: 'https://www.npmjs.com/package/@nitra/vite-check-env',
    website: 'https://github.com/nitra/vite-check-env',
  },
  source: {
    github: 'nitra/vite-check-env',
    npm: '@nitra/vite-check-env',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 192,
      weekly: 12,
    },
  },
})
