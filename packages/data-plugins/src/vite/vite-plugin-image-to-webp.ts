import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-to-webp',
  description: 'A vite plugin which will, when building, find all .jpeg, .jpg, and .png images, convert them to .webp and then adjust the image urls accordingly.',
  version: '1.0.14',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'image',
    'convert',
    'webp',
    'automatically',
    'simple',
    'compact',
    'typescript',
    'adjustable',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-image-to-webp',
  },
  stats: {
    downloads: {
      monthly: 1040,
      weekly: 241,
    },
  },
})
