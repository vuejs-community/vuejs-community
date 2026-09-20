import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rss',
  description: 'Create an RSS feed from an SPA at bundle time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'xml',
    'rss',
  ],
  links: {
    github: 'https://github.com/ec965/vite-plugin-rss',
    npm: 'https://www.npmjs.com/package/vite-plugin-rss',
    website: 'https://github.com/ec965/vite-plugin-rss#readme',
  },
  source: {
    github: 'ec965/vite-plugin-rss',
    npm: 'vite-plugin-rss',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
