import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shopify',
  description: 'Vite plugin providing integration for Shopify themes',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'shopify',
    'vite-plugin',
  ],
  source: {
    github: 'barrel/shopify-vite',
    npm: 'vite-plugin-shopify',
  },
  links: {
    github: 'https://github.com/barrel/shopify-vite',
    npm: 'https://www.npmjs.com/package/vite-plugin-shopify',
    website: 'https://github.com/barrel/shopify-vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 55272,
      weekly: 12384,
    },
  },
})
