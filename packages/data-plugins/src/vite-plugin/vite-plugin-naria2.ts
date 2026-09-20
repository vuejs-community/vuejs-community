import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-naria2',
  description: 'Vite naria2 integration',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/yjl9903/naria2',
    npm: 'https://www.npmjs.com/package/vite-plugin-naria2',
    website: 'https://github.com/yjl9903/naria2#readme',
  },
  source: {
    github: 'yjl9903/naria2',
    npm: 'vite-plugin-naria2',
  },
  stats: {
    stars: 24,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
