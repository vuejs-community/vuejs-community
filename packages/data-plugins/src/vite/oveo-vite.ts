import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@oveo/vite',
  description: 'Vite plugin for oveo optimizer',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'oveo',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/localvoid/oveo',
    npm: 'https://www.npmjs.com/package/@oveo/vite',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 10,
    },
  },
})
