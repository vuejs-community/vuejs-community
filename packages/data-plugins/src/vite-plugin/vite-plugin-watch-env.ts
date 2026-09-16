import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-watch-env',
  description: '> Apply .env file to process.env and watch file changes in vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'watch-env',
    'dot-env',
    'env',
  ],
  source: {
    github: 'Enoooch/vite-plugin-watch-env',
    npm: 'vite-plugin-watch-env',
  },
  links: {
    github: 'https://github.com/Enoooch/vite-plugin-watch-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-watch-env',
    website: 'https://github.com/Enoooch/vite-plugin-watch-env',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1130,
      weekly: 204,
    },
  },
})
