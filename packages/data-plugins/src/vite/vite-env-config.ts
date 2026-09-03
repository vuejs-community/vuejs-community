import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-env-config',
  description: 'A Vite plugin to generate config.js from .env file',
  version: '0.0.9',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'config',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-env-config',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
