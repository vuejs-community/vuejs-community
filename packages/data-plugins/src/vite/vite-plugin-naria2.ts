import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-naria2',
  description: 'Vite naria2 integration',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'aria2',
    'aria2c',
    'download',
    'http',
    'websocket',
    'bittorrent',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yjl9903/naria2',
    npm: 'https://www.npmjs.com/package/vite-plugin-naria2',
  },
  stats: {
    downloads: {
      monthly: 80,
      weekly: 1,
    },
  },
})
