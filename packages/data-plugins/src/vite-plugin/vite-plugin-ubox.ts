import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ubox',
  description: 'A Vite plugin that automatically generates an image list file from image resources',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'image',
    'assets',
    'generator',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-ubox',
  },
  source: {
    npm: 'vite-plugin-ubox',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
