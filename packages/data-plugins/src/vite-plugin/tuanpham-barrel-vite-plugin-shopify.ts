import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tuanpham-barrel/vite-plugin-shopify',
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
    npm: '@tuanpham-barrel/vite-plugin-shopify',
  },
  links: {
    github: 'https://github.com/barrel/shopify-vite',
    npm: 'https://www.npmjs.com/package/@tuanpham-barrel/vite-plugin-shopify',
    website: 'https://github.com/barrel/shopify-vite#readme',
  },
  stats: {
    stars: 466,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
