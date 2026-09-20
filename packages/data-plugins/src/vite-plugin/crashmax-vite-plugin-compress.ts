import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@crashmax/vite-plugin-compress',
  description: 'Compress your bundle + assets from Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'compress',
    'brotli',
    'imagemin',
    'pngquant',
    'svgo',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@crashmax/vite-plugin-compress',
  },
  source: {
    npm: '@crashmax/vite-plugin-compress',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
