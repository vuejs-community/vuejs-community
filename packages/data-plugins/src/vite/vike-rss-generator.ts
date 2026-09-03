import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vike-rss-generator',
  description: 'Vite plugin for Vike that generates RSS, Atom, and JSON Feed files at build time',
  version: '0.0.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/welpie21/vike-rss-generator',
    npm: 'https://www.npmjs.com/package/vike-rss-generator',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
