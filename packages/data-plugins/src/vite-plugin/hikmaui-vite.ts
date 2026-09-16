import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hikmaui/vite',
  description: 'Vite plugin for HikmaUI',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hikmaui',
  ],
  source: {
    npm: '@hikmaui/vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@hikmaui/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
