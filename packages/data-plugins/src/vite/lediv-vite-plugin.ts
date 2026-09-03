import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lediv/vite-plugin',
  description: 'Vite plugin for building Lediv projects',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'lediv',
    'vite',
    'vite-plugin',
    'html',
    'build',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@lediv/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 7,
    },
  },
})
