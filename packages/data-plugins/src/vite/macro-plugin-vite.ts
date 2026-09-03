import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@macro-plugin/vite',
  description: 'Macro plugins integration for vite',
  version: '1.2.2',
  category: 'plugin',
  tags: [
    'vite',
    'vitejs',
    'vite-plugin',
    'macro',
    'macro-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/macro-plugin/macros',
    npm: 'https://www.npmjs.com/package/@macro-plugin/vite',
  },
  stats: {
    downloads: {
      monthly: 69,
      weekly: 28,
    },
  },
})
