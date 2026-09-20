import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shopify-inline-styles',
  description: 'Vite plugin for Shopify themes: render each section/snippet\'s built CSS as an inline <style> tag via inline_asset_content',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/cesareuseche/vite-shopify-styles-plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-shopify-inline-styles',
    website: 'https://github.com/cesareuseche/vite-shopify-styles-plugin#readme',
  },
  source: {
    github: 'cesareuseche/vite-shopify-styles-plugin',
    npm: 'vite-plugin-shopify-inline-styles',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 49,
      weekly: 8,
    },
  },
})
