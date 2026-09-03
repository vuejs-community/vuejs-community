import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@datarose/vite-plugin-media-optimize',
  description: 'Vite Plugin - Image optimization in production release',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'image compression',
    'image optimization',
    'convert to webp',
    'jpg & png to webp',
    'svgo',
    'sharp.js',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/datarose-net/vite-plugin-media-optimize',
    npm: 'https://www.npmjs.com/package/@datarose/vite-plugin-media-optimize',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
