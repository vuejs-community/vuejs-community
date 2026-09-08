import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ubox',
  description: 'A Vite plugin that automatically generates an image list file from image resources',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'image',
    'assets',
    'generator',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-ubox',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-ubox',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
