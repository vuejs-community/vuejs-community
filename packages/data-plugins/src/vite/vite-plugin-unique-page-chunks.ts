import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-unique-page-chunks',
  description: 'A Vite plugin to generate unique chunks for pages with same-named components',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'chunks',
    'unique',
    'page',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fecym/vite-plugin-unique-page-chunks',
    npm: 'https://www.npmjs.com/package/vite-plugin-unique-page-chunks',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
