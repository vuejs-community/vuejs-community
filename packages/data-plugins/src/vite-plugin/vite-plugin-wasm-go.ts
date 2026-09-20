import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wasm-go',
  description: 'vite plugin for go compile wasm',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'wasm-go',
    'go-wasm',
  ],
  links: {
    github: 'https://github.com/m-Ryan/vite-plugin-wasm-go',
    npm: 'https://www.npmjs.com/package/vite-plugin-wasm-go',
    website: 'https://github.com/m-Ryan/vite-plugin-wasm-go#readme',
  },
  source: {
    github: 'm-Ryan/vite-plugin-wasm-go',
    npm: 'vite-plugin-wasm-go',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
