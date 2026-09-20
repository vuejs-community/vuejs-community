import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-env-config',
  description: 'A Vite plugin to generate config.js from .env file',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'config',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-env-config',
    website: 'https://github.com/hiship/vite-plugin-env-config',
  },
  source: {
    npm: 'vite-env-config',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
