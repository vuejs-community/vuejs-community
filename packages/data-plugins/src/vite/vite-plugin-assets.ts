import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-assets',
  description: 'Vite assets server',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'assets',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/edersoares/vite-plugin-assets',
    npm: 'https://www.npmjs.com/package/vite-plugin-assets',
  },
  stats: {
    downloads: {
      monthly: 100,
      weekly: 31,
    },
  },
})
