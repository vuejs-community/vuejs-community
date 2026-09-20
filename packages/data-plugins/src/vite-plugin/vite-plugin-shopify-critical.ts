import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shopify-critical',
  description: 'Vite plugin for inlining critical CSS/JS in Shopify themes using inline_asset_content',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/marioloncarek/vite-plugin-shopify-critical',
    npm: 'https://www.npmjs.com/package/vite-plugin-shopify-critical',
    website: 'https://github.com/marioloncarek/vite-plugin-shopify-critical#readme',
  },
  source: {
    github: 'marioloncarek/vite-plugin-shopify-critical',
    npm: 'vite-plugin-shopify-critical',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
