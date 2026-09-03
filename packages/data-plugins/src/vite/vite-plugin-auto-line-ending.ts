import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-line-ending',
  description: 'Vite plugin to convert line endings based on the platform (CRLF for Windows, LF for others)',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'line-ending',
    'crlf',
    'lf',
    'cross-platform',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/memorylovers/vite-plugin-auto-line-ending',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-line-ending',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 15,
    },
  },
})
