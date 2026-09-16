import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@peterek/vite-plugin-favicons',
  description: 'Simple Vite plugin to generate favicons from source image. Nothing more, nothing less.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'favicon',
    'favicons',
    'image',
    'ico',
    'icon',
    'generate',
    'generator',
  ],
  source: {
    github: 'peterekjs/vite-plugin-favicons',
    npm: '@peterek/vite-plugin-favicons',
  },
  links: {
    github: 'https://github.com/peterekjs/vite-plugin-favicons',
    npm: 'https://www.npmjs.com/package/@peterek/vite-plugin-favicons',
    website: 'https://github.com/peterekjs/vite-plugin-favicons#readme',
  },
  stats: {
    stars: 13,
    downloads: {
      monthly: 12856,
      weekly: 2572,
    },
  },
})
