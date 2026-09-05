import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shopify-inline-styles',
  description: 'Vite plugin for Shopify themes: render each section/snippet\'s built CSS as an inline <style> tag via inline_asset_content',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'shopify',
    'shopify-theme',
    'css',
    'inline-styles',
    'critical-css',
    'performance',
    'web-performance',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cesareuseche/vite-shopify-styles-plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-shopify-inline-styles',
  },
  stats: {
    downloads: {
      monthly: 82,
      weekly: 9,
    },
  },
})
