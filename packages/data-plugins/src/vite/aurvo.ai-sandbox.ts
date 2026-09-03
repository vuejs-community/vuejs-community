import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aurvo.ai/sandbox',
  description: 'High-performance Wasm-based Node.js, Python, and Java sandbox for the browser.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'sandbox',
    'wasm',
    'webcontainer',
    'node-wasm',
    'browser-os',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@aurvo.ai/sandbox',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
