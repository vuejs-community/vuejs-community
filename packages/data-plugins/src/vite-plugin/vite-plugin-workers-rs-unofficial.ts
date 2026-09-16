import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-workers-rs-unofficial',
  description: 'Vite plugin that integrates Rust worker-build with @cloudflare/vite-plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'aquilacf/workers-rs',
    npm: 'vite-plugin-workers-rs-unofficial',
  },
  links: {
    github: 'https://github.com/aquilacf/workers-rs',
    npm: 'https://www.npmjs.com/package/vite-plugin-workers-rs-unofficial',
    website: 'https://github.com/aquilacf/workers-rs/tree/main/vite-plugin-workers-rs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 1,
    },
  },
})
