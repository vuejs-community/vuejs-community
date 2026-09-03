import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'tushy-vite-plugin',
  description: 'Vite plugin for our tushy shopify theme',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'shopify',
    'vite-plugin',
    'tushy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sh-sabbir/tushy-vite-plugin',
    npm: 'https://www.npmjs.com/package/tushy-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 2,
    },
  },
})
