import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-to-webp',
  description: 'Vite plugin that converts images in your public directory to WebP during development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'webp',
    'images',
    'sharp',
  ],
  source: {
    npm: 'vite-plugin-to-webp',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-to-webp',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 332,
      weekly: 13,
    },
  },
})
