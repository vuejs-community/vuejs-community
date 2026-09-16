import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-temp-file',
  description: 'Adds a temporary file to your project when running the Vite server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'temporary',
    'temp-file',
    'temp',
    'tmp',
  ],
  source: {
    npm: 'vite-plugin-temp-file',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-temp-file',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
