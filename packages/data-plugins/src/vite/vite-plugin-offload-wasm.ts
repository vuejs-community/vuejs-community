import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-offload-wasm',
  description: 'Serve WASM from a CDN or any remote location, bypassing the local server entirely',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'offload',
    'wasm',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kermage/vite-plugin-offload-wasm',
    npm: 'https://www.npmjs.com/package/vite-plugin-offload-wasm',
  },
  stats: {
    downloads: {
      monthly: 41,
      weekly: 17,
    },
  },
})
