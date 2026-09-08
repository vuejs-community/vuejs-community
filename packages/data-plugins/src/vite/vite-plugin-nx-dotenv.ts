import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nx-dotenv',
  description: 'Support Vite\'s [mode] mode of dotenv usage in Nx',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'nx',
    'dotenv',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'chf007/vite-plugin-nx-dotenv',
    npm: 'vite-plugin-nx-dotenv',
  },
  links: {
    github: 'https://github.com/chf007/vite-plugin-nx-dotenv',
    npm: 'https://www.npmjs.com/package/vite-plugin-nx-dotenv',
  },
  stats: {
    downloads: {
      monthly: 420,
      weekly: 36,
    },
  },
})
