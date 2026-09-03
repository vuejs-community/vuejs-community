import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-font-extractor-plugin',
  description: 'Vite plugin for extracting glyphes by ligatures from font and creating new minimized fonts with them',
  version: '3.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'font-minificator',
    'fonts',
    'minificator',
    'ligature',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/a3mitskevich/vite-font-extractor-plugin',
    npm: 'https://www.npmjs.com/package/vite-font-extractor-plugin',
  },
  stats: {
    downloads: {
      monthly: 67,
      weekly: 13,
    },
  },
})
