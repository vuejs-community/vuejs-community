import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aurvo.ai/sandbox',
  description: 'High-performance Wasm-based Node.js, Python, and Java sandbox for the browser.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sandbox',
    'wasm',
    'webcontainer',
    'node-wasm',
    'browser-os',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@aurvo.ai/sandbox',
  },
  source: {
    npm: '@aurvo.ai/sandbox',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
