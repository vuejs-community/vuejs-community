import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-srcset',
  description: 'Simple Vite plugin to generate srcset attributes for images',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'image',
    'srcset',
    'responsive',
    'retina',
    'hdpi',
  ],
  source: {
    github: 'nbarinov/vite-plugin-image-srcset',
    npm: 'vite-plugin-image-srcset',
  },
  links: {
    github: 'https://github.com/nbarinov/vite-plugin-image-srcset',
    npm: 'https://www.npmjs.com/package/vite-plugin-image-srcset',
    website: 'https://github.com/nbarinov/vite-plugin-image-srcset#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 329,
      weekly: 19,
    },
  },
})
