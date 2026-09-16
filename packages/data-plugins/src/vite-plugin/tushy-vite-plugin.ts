import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tushy-vite-plugin',
  description: 'Vite plugin for our tushy shopify theme',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'shopify',
    'vite-plugin',
    'tushy',
  ],
  source: {
    github: 'sh-sabbir/tushy-vite-plugin',
    npm: 'tushy-vite-plugin',
  },
  links: {
    github: 'https://github.com/sh-sabbir/tushy-vite-plugin',
    npm: 'https://www.npmjs.com/package/tushy-vite-plugin',
    website: 'https://github.com/sh-sabbir/tushy-vite-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
