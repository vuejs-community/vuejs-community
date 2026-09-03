import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-function-string',
  description: 'A Vite plugin to convert function.toString() at compile time',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'function',
    'toString',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-function-string',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
