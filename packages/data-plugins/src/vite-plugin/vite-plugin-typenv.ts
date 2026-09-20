import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-typenv',
  description: 'A Vite plugin to use JS/TS files for environment variables instead of .env files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'environment-variables',
    'env',
    'typescript',
  ],
  links: {
    github: 'https://github.com/kerozhai/vite-plugin-typenv',
    npm: 'https://www.npmjs.com/package/vite-plugin-typenv',
    website: 'https://github.com/kerozhai/vite-plugin-typenv#readme',
  },
  source: {
    github: 'kerozhai/vite-plugin-typenv',
    npm: 'vite-plugin-typenv',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
