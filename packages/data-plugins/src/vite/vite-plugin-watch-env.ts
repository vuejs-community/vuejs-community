import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-watch-env',
  description: '> Apply .env file to process.env and watch file changes in vite.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'watch-env',
    'dot-env',
    'env',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Enoooch/vite-plugin-watch-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-watch-env',
  },
  stats: {
    downloads: {
      monthly: 1413,
      weekly: 418,
    },
  },
})
