import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shopify-liquid-imports',
  description: 'Post-build companion to vite-plugin-shopify that enables native-ESM code splitting on Shopify themes via a classic bootstrap and Blob module graph — no import maps or .js.liquid chunk rewriting.',
  version: '0.2.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'shopify',
    'liquid',
    'code-splitting',
    'esm',
    'asset_url',
    'blob',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-shopify-liquid-imports',
  },
  stats: {
    downloads: {
      monthly: 81,
      weekly: 11,
    },
  },
})
