import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-offload-wasm',
  description: 'Serve WASM from a CDN or any remote location, bypassing the local server entirely',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'offload',
    'wasm',
  ],
  links: {
    github: 'https://github.com/kermage/vite-plugin-offload-wasm',
    npm: 'https://www.npmjs.com/package/vite-plugin-offload-wasm',
    website: 'https://github.com/kermage/vite-plugin-offload-wasm#readme',
  },
  source: {
    github: 'kermage/vite-plugin-offload-wasm',
    npm: 'vite-plugin-offload-wasm',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 9,
    },
  },
})
