import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compress',
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
    github: 'https://github.com/alloc/vite-plugin-compress',
    npm: 'https://www.npmjs.com/package/vite-plugin-compress',
    website: 'https://github.com/alloc/vite-plugin-compress#readme',
  },
  source: {
    github: 'alloc/vite-plugin-compress',
    npm: 'vite-plugin-compress',
  },
  stats: {
    stars: 133,
    downloads: {
      monthly: 989,
      weekly: 216,
    },
  },
})
