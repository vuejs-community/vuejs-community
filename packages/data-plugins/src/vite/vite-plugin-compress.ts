import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compress',
  description: 'Compress your bundle + assets from Vite',
  icon: 'logos:vite-icon',
  version: '2.1.1',
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
  source: {
    github: 'alloc/vite-plugin-compress',
    npm: 'vite-plugin-compress',
  },
  links: {
    github: 'https://github.com/alloc/vite-plugin-compress',
    npm: 'https://www.npmjs.com/package/vite-plugin-compress',
  },
  stats: {
    downloads: {
      monthly: 1059,
      weekly: 205,
    },
  },
})
