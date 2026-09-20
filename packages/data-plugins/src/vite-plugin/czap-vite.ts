import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@czap/vite',
  description: 'The Vite plugin for LiteShip: compile `@token`, `@theme`, `@style`, and `@quantize` blocks into native CSS and hot-reload boundary definitions as you edit.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'czap',
    'liteship',
    'vite-plugin',
    'css',
    'hmr',
    'typescript',
  ],
  links: {
    github: 'https://github.com/freebatteryfactory/LiteShip',
    npm: 'https://www.npmjs.com/package/@czap/vite',
    website: 'https://github.com/freebatteryfactory/LiteShip#readme',
  },
  source: {
    github: 'freebatteryfactory/LiteShip',
    npm: '@czap/vite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 159,
      weekly: 2,
    },
  },
})
