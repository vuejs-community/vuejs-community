import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-easy-player-pro',
  description: 'easy-player-pro plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'easy-player-pro',
  ],
  source: {
    github: 'meterXu/easy-player',
    npm: 'vite-plugin-easy-player-pro',
  },
  links: {
    github: 'https://github.com/meterXu/easy-player',
    npm: 'https://www.npmjs.com/package/vite-plugin-easy-player-pro',
    website: 'https://github.com/meterXu/easy-player#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 7,
    },
  },
})
