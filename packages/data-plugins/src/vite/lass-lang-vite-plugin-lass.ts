import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lass-lang/vite-plugin-lass',
  description: 'Vite plugin for Lass language',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'lass',
    'vite',
    'vite-plugin',
    'css',
    'preprocessor',
    'styling',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lass-lang/vite-plugin-lass',
    npm: 'https://www.npmjs.com/package/@lass-lang/vite-plugin-lass',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 5,
    },
  },
})
