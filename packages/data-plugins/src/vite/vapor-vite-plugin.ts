import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vapor-vite-plugin',
  description: 'Vapor plugin for Vite.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vapor',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/m1guelpf/vapor-vite-plugin',
    npm: 'https://www.npmjs.com/package/vapor-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
