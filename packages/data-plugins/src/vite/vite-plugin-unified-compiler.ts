import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-unified-compiler',
  description: 'Vite plugin that compiles files using unified.js.',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'markdown',
    'unified',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cclinet/vite-plugin-unified-compiler',
    npm: 'https://www.npmjs.com/package/vite-plugin-unified-compiler',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
