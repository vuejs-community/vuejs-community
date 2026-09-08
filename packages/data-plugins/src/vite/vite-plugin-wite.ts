import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wite',
  description: 'Vite plugin for importing .wasm files built with wite',
  icon: 'logos:vite-icon',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'wasm',
    'webassembly',
    'moonbit',
    'wite',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-wite',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-wite',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 5,
    },
  },
})
