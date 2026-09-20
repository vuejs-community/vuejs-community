import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nx-dotenv',
  description: 'Support Vite\'s [mode] mode of dotenv usage in Nx',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'nx',
    'dotenv',
  ],
  links: {
    github: 'https://github.com/chf007/vite-plugin-nx-dotenv',
    npm: 'https://www.npmjs.com/package/vite-plugin-nx-dotenv',
    website: 'https://github.com/chf007/vite-plugin-nx-dotenv#readme',
  },
  source: {
    github: 'chf007/vite-plugin-nx-dotenv',
    npm: 'vite-plugin-nx-dotenv',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 393,
      weekly: 63,
    },
  },
})
