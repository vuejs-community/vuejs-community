import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-font-extractor-plugin',
  description: 'Vite plugin for extracting glyphes by ligatures from font and creating new minimized fonts with them',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'font-minificator',
    'fonts',
    'minificator',
    'ligature',
  ],
  links: {
    github: 'https://github.com/a3mitskevich/vite-font-extractor-plugin',
    npm: 'https://www.npmjs.com/package/vite-font-extractor-plugin',
    website: 'https://github.com/a3mitskevich/vite-font-extractor-plugin',
  },
  source: {
    github: 'a3mitskevich/vite-font-extractor-plugin',
    npm: 'vite-font-extractor-plugin',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 54,
      weekly: 11,
    },
  },
})
