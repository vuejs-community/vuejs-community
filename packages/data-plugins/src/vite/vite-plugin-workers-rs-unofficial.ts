import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-workers-rs-unofficial',
  description: 'Vite plugin that integrates Rust worker-build with @cloudflare/vite-plugin',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cloudflare',
    'cloudflare-workers',
    'rust',
    'wasm',
    'worker-build',
    'workers-rs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aquilacf/workers-rs',
    npm: 'https://www.npmjs.com/package/vite-plugin-workers-rs-unofficial',
  },
  stats: {
    downloads: {
      monthly: 36,
      weekly: 1,
    },
  },
})
