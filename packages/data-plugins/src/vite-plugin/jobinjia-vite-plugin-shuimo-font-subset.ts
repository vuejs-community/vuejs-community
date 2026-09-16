import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jobinjia/vite-plugin-shuimo-font-subset',
  description: 'Content-aware font subset Vite plugin — scans source files for unique characters and replaces font assets with subsetted WOFF2 at build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'font',
    'subset',
    'woff2',
    'chinese',
  ],
  source: {
    npm: '@jobinjia/vite-plugin-shuimo-font-subset',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@jobinjia/vite-plugin-shuimo-font-subset',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
