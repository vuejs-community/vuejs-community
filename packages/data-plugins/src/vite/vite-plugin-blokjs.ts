import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-blokjs',
  description: 'Vite plugin for BlokJS - auto-discovers components and stores by filename convention',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'blokjs',
    'auto-discovery',
    'components',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/maleta/blokjs',
    npm: 'https://www.npmjs.com/package/vite-plugin-blokjs',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 0,
    },
  },
})
