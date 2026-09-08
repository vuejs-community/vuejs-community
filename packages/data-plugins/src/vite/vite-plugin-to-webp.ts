import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-to-webp',
  description: 'Vite plugin that converts images in your public directory to WebP during development',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'webp',
    'images',
    'sharp',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-to-webp',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-to-webp',
  },
  stats: {
    downloads: {
      monthly: 285,
      weekly: 91,
    },
  },
})
