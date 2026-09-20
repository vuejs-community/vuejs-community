import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-function-string',
  description: 'A Vite plugin to convert function.toString() at compile time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'function',
    'toString',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-function-string',
  },
  source: {
    npm: 'vite-plugin-function-string',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
