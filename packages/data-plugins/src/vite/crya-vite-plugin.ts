import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'crya-vite-plugin',
  description: 'A Vite plugin that writes a hot file while the dev server is running',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'crya',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/crya-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
