import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-font-subset',
  description: 'Vite plugin to subset fonts to WOFF2 based on project character usage',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'font',
    'subset',
    'woff2',
  ],
  source: {
    npm: 'vite-plugin-font-subset',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-font-subset',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 32,
    },
  },
})
