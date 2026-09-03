import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aureal/vite-plugin-watermark',
  description: 'Vite plugin that invisibly watermarks all image assets at build time',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'watermark',
    'image',
    'steganography',
    'invisible-watermark',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/NPSummers/vite-plugin-watermark',
    npm: 'https://www.npmjs.com/package/@aureal/vite-plugin-watermark',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 7,
    },
  },
})
