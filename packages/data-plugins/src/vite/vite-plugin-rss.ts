import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rss',
  description: 'Create an RSS feed from an SPA at bundle time.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'ec965/vite-plugin-rss',
    npm: 'vite-plugin-rss',
  },
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
