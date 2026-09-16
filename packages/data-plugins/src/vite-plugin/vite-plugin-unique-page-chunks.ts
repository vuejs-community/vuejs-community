import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-unique-page-chunks',
  description: 'A Vite plugin to generate unique chunks for pages with same-named components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'chunks',
    'unique',
    'page',
  ],
  source: {
    github: 'fecym/vite-plugin-unique-page-chunks',
    npm: 'vite-plugin-unique-page-chunks',
  },
  links: {
    github: 'https://github.com/fecym/vite-plugin-unique-page-chunks',
    npm: 'https://www.npmjs.com/package/vite-plugin-unique-page-chunks',
    website: 'https://github.com/fecym/vite-plugin-unique-page-chunks#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
