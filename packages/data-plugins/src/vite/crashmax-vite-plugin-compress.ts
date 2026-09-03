import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@crashmax/vite-plugin-compress',
  description: 'Compress your bundle + assets from Vite',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'compress',
    'brotli',
    'imagemin',
    'pngquant',
    'svgo',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@crashmax/vite-plugin-compress',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
