import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compress',
  description: 'Compress your bundle + assets from Vite',
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
  links: {
    github: 'https://github.com/alloc/vite-plugin-compress',
    npm: 'https://www.npmjs.com/package/vite-plugin-compress',
  },
  stats: {
    downloads: {
      monthly: 1128,
      weekly: 269,
    },
  },
})
