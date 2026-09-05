import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-eslint-logger',
  description: 'A vite plugin to show ESlint logs in browser and terminal',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'eslint',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Joker/vite-plugin-eslint-logger',
    npm: 'https://www.npmjs.com/package/vite-plugin-eslint-logger',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 9,
    },
  },
})
