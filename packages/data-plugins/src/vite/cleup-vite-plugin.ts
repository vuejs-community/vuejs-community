import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'cleup-vite-plugin',
  description: 'Cleup plugin for Vite',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'cleup',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cleup/vite-plugin',
    npm: 'https://www.npmjs.com/package/cleup-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 4,
    },
  },
})
