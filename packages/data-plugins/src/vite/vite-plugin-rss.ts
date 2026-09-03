import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rss',
  description: 'Create an RSS feed from an SPA at bundle time.',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'xml',
    'rss',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ec965/vite-plugin-rss',
    npm: 'https://www.npmjs.com/package/vite-plugin-rss',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 6,
    },
  },
})
