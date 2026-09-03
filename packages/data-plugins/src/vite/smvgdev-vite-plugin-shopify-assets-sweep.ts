import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@smvgdev/vite-plugin-shopify-assets-sweep',
  description: 'Sweeps away stale Vite build artifacts from the Shopify assets folder, preserving static files via a static-assets manifest.',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'shopify',
    'assets',
    'clean',
    'sweep',
    'build',
    'manifest',
    'theme',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/StuartMVG/vite-plugin-shopify-assets-sweep',
    npm: 'https://www.npmjs.com/package/@smvgdev/vite-plugin-shopify-assets-sweep',
  },
  stats: {
    downloads: {
      monthly: 38,
      weekly: 9,
    },
  },
})
