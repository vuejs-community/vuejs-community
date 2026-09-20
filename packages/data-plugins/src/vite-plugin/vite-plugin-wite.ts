import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wite',
  description: 'Vite plugin for importing .wasm files built with wite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wasm',
    'webassembly',
    'moonbit',
    'wite',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-wite',
  },
  source: {
    npm: 'vite-plugin-wite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
