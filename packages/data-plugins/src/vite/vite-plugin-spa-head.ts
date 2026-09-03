import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spa-head',
  description: 'Inject SEO / Open Graph / Twitter head tags into a SPA index.html at build time.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'spa',
    'seo',
    'head',
    'meta',
    'open-graph',
    'twitter-card',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-spa-head',
  },
  stats: {
    downloads: {
      monthly: 317,
      weekly: 317,
    },
  },
})
