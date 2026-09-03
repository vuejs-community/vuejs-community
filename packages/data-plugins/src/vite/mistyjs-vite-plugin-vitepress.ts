import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mistyjs/vite-plugin-vitepress',
  description: 'This is a vite plugin',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vitepress',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@mistyjs/vite-plugin-vitepress',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
