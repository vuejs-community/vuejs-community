import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@soku-games/vite-plugin',
  description: 'The Vite Plugin for SokuGames.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'soku-games',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Board-Game-Bot/vite-plugin',
    npm: 'https://www.npmjs.com/package/@soku-games/vite-plugin',
    website: 'https://github.com/Board-Game-Bot/vite-plugin#readme',
  },
  source: {
    github: 'Board-Game-Bot/vite-plugin',
    npm: '@soku-games/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 8,
    },
  },
})
