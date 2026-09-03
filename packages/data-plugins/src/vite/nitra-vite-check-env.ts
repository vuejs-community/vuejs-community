import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nitra/vite-check-env',
  description: 'Vite.js plugin that makes build fail if a required environment variable(s) is missing',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'check-env',
    'env',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nitra/vite-check-env',
    npm: 'https://www.npmjs.com/package/@nitra/vite-check-env',
  },
  stats: {
    downloads: {
      monthly: 168,
      weekly: 82,
    },
  },
})
