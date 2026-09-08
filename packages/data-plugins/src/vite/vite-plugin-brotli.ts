import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-brotli',
  description: 'compress your Vite html, css and js files with brotli',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'yourusername/vite-plugin-brotli',
    npm: 'vite-plugin-brotli',
  },
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
