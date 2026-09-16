import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@smvgdev/vite-plugin-shopify-assets-sweep',
  description: 'Sweeps away stale Vite build artifacts from the Shopify assets folder, preserving static files via a static-assets manifest.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'StuartMVG/vite-plugin-shopify-assets-sweep',
    npm: '@smvgdev/vite-plugin-shopify-assets-sweep',
  },
  links: {
    github: 'https://github.com/StuartMVG/vite-plugin-shopify-assets-sweep',
    npm: 'https://www.npmjs.com/package/@smvgdev/vite-plugin-shopify-assets-sweep',
    website: 'https://github.com/StuartMVG/vite-plugin-shopify-assets-sweep#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
