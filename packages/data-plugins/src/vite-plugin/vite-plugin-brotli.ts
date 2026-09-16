import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-brotli',
  description: 'compress your Vite html, css and js files with brotli',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'brotli',
    'compression',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'yourusername/vite-plugin-brotli',
    npm: 'vite-plugin-brotli',
  },
  links: {
    github: 'https://github.com/yourusername/vite-plugin-brotli',
    npm: 'https://www.npmjs.com/package/vite-plugin-brotli',
    website: 'https://github.com/yourusername/vite-plugin-brotli#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 2,
    },
  },
})
