import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-typenv',
  description: 'A Vite plugin to use JS/TS files for environment variables instead of .env files',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'environment-variables',
    'env',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kerozhai/vite-plugin-typenv',
    npm: 'https://www.npmjs.com/package/vite-plugin-typenv',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 4,
    },
  },
})
