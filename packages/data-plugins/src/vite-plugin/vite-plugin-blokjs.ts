import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-blokjs',
  description: 'Vite plugin for BlokJS - auto-discovers components and stores by filename convention',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'blokjs',
    'auto-discovery',
    'components',
  ],
  source: {
    github: 'maleta/blokjs',
    npm: 'vite-plugin-blokjs',
  },
  links: {
    github: 'https://github.com/maleta/blokjs',
    npm: 'https://www.npmjs.com/package/vite-plugin-blokjs',
    website: 'https://github.com/maleta/blokjs/tree/main/packages/vite-plugin-blokjs',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
