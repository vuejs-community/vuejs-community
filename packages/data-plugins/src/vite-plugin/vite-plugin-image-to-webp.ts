import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-to-webp',
  description: 'A vite plugin which will, when building, find all .jpeg, .jpg, and .png images, convert them to .webp and then adjust the image urls accordingly.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: 'vite-plugin-image-to-webp',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-image-to-webp',
    website: 'https://gitlab.com/gdur.mugen/vite-plugin-image-to-webp#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 785,
      weekly: 109,
    },
  },
})
