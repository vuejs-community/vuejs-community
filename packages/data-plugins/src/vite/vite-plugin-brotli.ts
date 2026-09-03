import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-brotli',
  description: 'compress your Vite html, css and js files with brotli',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'brotli',
    'compression',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yourusername/vite-plugin-brotli',
    npm: 'https://www.npmjs.com/package/vite-plugin-brotli',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 6,
    },
  },
})
