import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-font-subset',
  description: 'Vite plugin to subset fonts to WOFF2 based on project character usage',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'font',
    'subset',
    'woff2',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-font-subset',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 15,
    },
  },
})
