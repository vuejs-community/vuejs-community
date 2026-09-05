import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-sync',
  description: 'Vite plugin to automatically sync .env keys to .env.example',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'env',
    'dotenv',
    'environment',
    'sync',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-sync',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
