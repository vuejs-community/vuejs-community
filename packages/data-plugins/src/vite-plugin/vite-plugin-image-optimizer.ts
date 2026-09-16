import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-image-optimizer',
  description: 'A Vite plugin to optimize your image assets using Sharp.js and SVGO',
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
    'svgo',
    'sharp.js',
  ],
  source: {
    github: 'FatehAK/vite-plugin-image-optimizer',
    npm: 'vite-plugin-image-optimizer',
  },
  links: {
    github: 'https://github.com/FatehAK/vite-plugin-image-optimizer',
    npm: 'https://www.npmjs.com/package/vite-plugin-image-optimizer',
    website: 'https://github.com/FatehAK/vite-plugin-image-optimizer#readme',
  },
  stats: {
    stars: 517,
    downloads: {
      monthly: 1032431,
      weekly: 206232,
    },
  },
})
