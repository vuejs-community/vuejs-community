import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-wasm-zig',
  description: '## Install',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'wasm',
    'zig',
  ],
  source: {
    github: 'langbamit/vite-wasm-zig',
    npm: 'vite-wasm-zig',
  },
  links: {
    github: 'https://github.com/langbamit/vite-wasm-zig',
    npm: 'https://www.npmjs.com/package/vite-wasm-zig',
    website: 'https://github.com/langbamit/vite-wasm-zig/tree/main/#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
