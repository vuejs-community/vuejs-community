import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vike-rss-generator',
  description: 'Vite plugin for Vike that generates RSS, Atom, and JSON Feed files at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vike',
    'vite',
    'rss',
    'atom',
    'json-feed',
    'feed',
    'vite-plugin',
    'vike-plugin',
    'vike-vite-plugin',
  ],
  source: {
    github: 'welpie21/vike-rss-generator',
    npm: 'vike-rss-generator',
  },
  links: {
    github: 'https://github.com/welpie21/vike-rss-generator',
    npm: 'https://www.npmjs.com/package/vike-rss-generator',
    website: 'https://github.com/welpie21/vike-rss-generator#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
