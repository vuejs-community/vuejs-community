import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aureal/vite-plugin-watermark',
  description: 'Vite plugin that invisibly watermarks all image assets at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'watermark',
    'image',
    'steganography',
    'invisible-watermark',
  ],
  links: {
    github: 'https://github.com/NPSummers/vite-plugin-watermark',
    npm: 'https://www.npmjs.com/package/@aureal/vite-plugin-watermark',
    website: 'https://github.com/NPSummers/vite-plugin-watermark#readme',
  },
  source: {
    github: 'NPSummers/vite-plugin-watermark',
    npm: '@aureal/vite-plugin-watermark',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 9,
    },
  },
})
