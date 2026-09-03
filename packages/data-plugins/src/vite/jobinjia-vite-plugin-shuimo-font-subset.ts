import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jobinjia/vite-plugin-shuimo-font-subset',
  description: 'Content-aware font subset Vite plugin — scans source files for unique characters and replaces font assets with subsetted WOFF2 at build time.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'font',
    'subset',
    'woff2',
    'chinese',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@jobinjia/vite-plugin-shuimo-font-subset',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 8,
    },
  },
})
