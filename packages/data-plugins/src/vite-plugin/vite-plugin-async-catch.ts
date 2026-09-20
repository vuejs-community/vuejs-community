import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-async-catch',
  description: 'A vite plugin that can auto inject try catch code for async function',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'async function',
    'try catch',
  ],
  links: {
    github: 'https://github.com/WJCHumble/vite-plugin-async-catch',
    npm: 'https://www.npmjs.com/package/vite-plugin-async-catch',
    website: 'https://github.com/WJCHumble/vite-plugin-async-catch',
  },
  source: {
    github: 'WJCHumble/vite-plugin-async-catch',
    npm: 'vite-plugin-async-catch',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 46,
      weekly: 3,
    },
  },
})
