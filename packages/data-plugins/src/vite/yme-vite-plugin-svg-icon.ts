import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@yme/vite-plugin-svg-icon',
  description: 'a vite plugin for svg icons, generate a svg sprite file and a helper function to use it',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/minosss/vite-plugins',
    npm: 'https://www.npmjs.com/package/@yme/vite-plugin-svg-icon',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
