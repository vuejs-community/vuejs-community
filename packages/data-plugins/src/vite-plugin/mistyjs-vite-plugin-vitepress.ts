import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mistyjs/vite-plugin-vitepress',
  description: 'This is a vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vitepress',
  ],
  source: {
    npm: '@mistyjs/vite-plugin-vitepress',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@mistyjs/vite-plugin-vitepress',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
