import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-to-webp',
  description: 'A vite plugin which will, when building, find all .jpeg, .jpg, and .png images, convert them to .webp and then adjust the image urls accordingly.',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-image-to-webp',
  },
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
