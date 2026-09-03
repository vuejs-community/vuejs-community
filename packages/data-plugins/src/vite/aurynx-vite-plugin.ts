import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aurynx/vite-plugin',
  description: 'A Vite plugin to compile Aurynx template syntax into native, high-performance PHP.',
  version: '0.10.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'php',
    'template',
    'aurynx',
    'ssr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aurynx/vite-plugin',
    npm: 'https://www.npmjs.com/package/@aurynx/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 59,
      weekly: 9,
    },
  },
})
