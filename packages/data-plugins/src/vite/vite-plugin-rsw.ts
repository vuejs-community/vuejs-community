import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rsw',
  description: 'wasm-pack plugin for Vite',
  icon: 'logos:vite-icon',
  version: '2.0.11',
  category: 'plugin',
  tags: [
    'rsw',
    'wasm',
    'vite',
    'plugin',
    'wasm-pack',
    'vite-plugin',
    'webAssembly',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'lencx/vite-plugin-rsw',
    npm: 'vite-plugin-rsw',
  },
  links: {
    github: 'https://github.com/lencx/vite-plugin-rsw',
    npm: 'https://www.npmjs.com/package/vite-plugin-rsw',
  },
  stats: {
    downloads: {
      monthly: 773,
      weekly: 261,
    },
  },
})
