import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shopify-theme',
  description: 'Wire a standard Shopify theme into Vite — HMR dev server + production bundle-metadata→snippet injection.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'hmr',
    'shopify',
    'shopify-theme',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/woodawn/vite-plugin-shopify-theme',
    npm: 'https://www.npmjs.com/package/vite-plugin-shopify-theme',
  },
  stats: {
    downloads: {
      monthly: 1253,
      weekly: 501,
    },
  },
})
