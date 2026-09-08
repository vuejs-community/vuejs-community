import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-async-catch',
  description: 'A vite plugin that can auto inject try catch code for async function',
  icon: 'logos:vite-icon',
  version: '0.1.8',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'async function',
    'try catch',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'WJCHumble/vite-plugin-async-catch',
    npm: 'vite-plugin-async-catch',
  },
  links: {
    github: 'https://github.com/WJCHumble/vite-plugin-async-catch',
    npm: 'https://www.npmjs.com/package/vite-plugin-async-catch',
  },
  stats: {
    downloads: {
      monthly: 85,
      weekly: 21,
    },
  },
})
