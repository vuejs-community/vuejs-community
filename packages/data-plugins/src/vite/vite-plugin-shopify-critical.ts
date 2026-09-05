import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shopify-critical',
  description: 'Vite plugin for inlining critical CSS/JS in Shopify themes using inline_asset_content',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'shopify',
    'critical-css',
    'critical-js',
    'performance',
    'inline-assets',
    'inline_asset_content',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/marioloncarek/vite-plugin-shopify-critical',
    npm: 'https://www.npmjs.com/package/vite-plugin-shopify-critical',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
