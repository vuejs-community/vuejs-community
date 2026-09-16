import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-line-ending',
  description: 'Vite plugin to convert line endings based on the platform (CRLF for Windows, LF for others)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'line-ending',
    'crlf',
    'lf',
    'cross-platform',
  ],
  source: {
    github: 'memorylovers/vite-plugin-auto-line-ending',
    npm: 'vite-plugin-auto-line-ending',
  },
  links: {
    github: 'https://github.com/memorylovers/vite-plugin-auto-line-ending',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-line-ending',
    website: 'https://github.com/memorylovers/vite-plugin-auto-line-ending#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 50,
      weekly: 18,
    },
  },
})
