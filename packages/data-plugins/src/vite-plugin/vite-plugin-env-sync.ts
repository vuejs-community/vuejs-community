import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-sync',
  description: 'Vite plugin to automatically sync .env keys to .env.example',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'dotenv',
    'environment',
    'sync',
  ],
  source: {
    npm: 'vite-plugin-env-sync',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-env-sync',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
