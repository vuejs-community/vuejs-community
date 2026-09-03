import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@easythread/vite',
  description: 'Vite plugin for easythread - automatic Web Worker generation',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'web-workers',
    'easythread',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/leka74/easythread',
    npm: 'https://www.npmjs.com/package/@easythread/vite',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 7,
    },
  },
})
