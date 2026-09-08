import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shopify',
  description: 'Vite plugin providing integration for Shopify themes',
  icon: 'logos:vite-icon',
  version: '5.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'shopify',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'barrel/shopify-vite',
    npm: 'vite-plugin-shopify',
  },
  links: {
    github: 'https://github.com/barrel/shopify-vite',
    npm: 'https://www.npmjs.com/package/vite-plugin-shopify',
  },
  stats: {
    downloads: {
      monthly: 63083,
      weekly: 14466,
    },
  },
})
