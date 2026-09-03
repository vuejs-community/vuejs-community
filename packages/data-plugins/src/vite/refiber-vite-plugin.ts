import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'refiber-vite-plugin',
  description: 'Refiber plugin for vite.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'refiber',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/refiber/vite-plugin',
    npm: 'https://www.npmjs.com/package/refiber-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
