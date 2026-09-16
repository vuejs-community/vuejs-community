import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shopify-theme',
  description: 'Wire a standard Shopify theme into Vite — HMR dev server + production bundle-metadata→snippet injection.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hmr',
    'shopify',
    'shopify-theme',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'woodawn/vite-plugin-shopify-theme',
    npm: 'vite-plugin-shopify-theme',
  },
  links: {
    github: 'https://github.com/woodawn/vite-plugin-shopify-theme',
    npm: 'https://www.npmjs.com/package/vite-plugin-shopify-theme',
    website: 'https://github.com/woodawn/vite-plugin-shopify-theme#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 652,
      weekly: 34,
    },
  },
})
