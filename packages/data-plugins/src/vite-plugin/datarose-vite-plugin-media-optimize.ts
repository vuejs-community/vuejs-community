import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@datarose/vite-plugin-media-optimize',
  description: 'Vite Plugin - Image optimization in production release',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'datarose-net/vite-plugin-media-optimize',
    npm: '@datarose/vite-plugin-media-optimize',
  },
  links: {
    github: 'https://github.com/datarose-net/vite-plugin-media-optimize',
    npm: 'https://www.npmjs.com/package/@datarose/vite-plugin-media-optimize',
    website: 'https://github.com/datarose-net/vite-plugin-media-optimize#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 44,
      weekly: 9,
    },
  },
})
