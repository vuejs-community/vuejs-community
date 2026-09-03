import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nette/vite-plugin',
  description: 'Nette plugin for Vite',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'nette',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nette/vite-plugin',
    npm: 'https://www.npmjs.com/package/@nette/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 2370,
      weekly: 640,
    },
  },
})
