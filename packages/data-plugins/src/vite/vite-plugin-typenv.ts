import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-typenv',
  description: 'A Vite plugin to use JS/TS files for environment variables instead of .env files',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'kerozhai/vite-plugin-typenv',
    npm: 'vite-plugin-typenv',
  },
  links: {
    github: 'https://github.com/kerozhai/vite-plugin-typenv',
    npm: 'https://www.npmjs.com/package/vite-plugin-typenv',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
