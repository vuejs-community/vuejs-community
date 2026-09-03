import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@floeorg/vite-plugin',
  description: 'Vite plugin for Floe - compile .fl files to TypeScript',
  version: '0.1.0-alpha.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'floe',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/floeorg/floe',
    npm: 'https://www.npmjs.com/package/@floeorg/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 5,
    },
  },
})
