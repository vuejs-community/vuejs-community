import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-eslint-logger',
  description: 'A vite plugin to show ESlint logs in browser and terminal',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'eslint',
  ],
  links: {
    github: 'https://github.com/Joker/vite-plugin-eslint-logger',
    npm: 'https://www.npmjs.com/package/vite-plugin-eslint-logger',
    website: 'https://github.com/Joker/vite-plugin-eslint-logger',
  },
  source: {
    github: 'Joker/vite-plugin-eslint-logger',
    npm: 'vite-plugin-eslint-logger',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 36,
      weekly: 17,
    },
  },
})
