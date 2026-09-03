import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@czap/vite',
  description: 'The Vite plugin for LiteShip: compile `@token`, `@theme`, `@style`, and `@quantize` blocks into native CSS and hot-reload boundary definitions as you edit.',
  version: '0.10.0',
  category: 'plugin',
  tags: [
    'czap',
    'liteship',
    'vite-plugin',
    'css',
    'hmr',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/freebatteryfactory/LiteShip',
    npm: 'https://www.npmjs.com/package/@czap/vite',
  },
  stats: {
    downloads: {
      monthly: 476,
      weekly: 35,
    },
  },
})
