import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@md-plugins/vite-search-plugin',
  description: 'A Vite plugin that generates search index data for Markdown and Q-Press documentation sites.',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'algolia',
    'markdown',
    'meilisearch',
    'q-press',
    'quasarframework',
    'search',
    'static-site-search',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/md-plugins/md-plugins',
    npm: 'https://www.npmjs.com/package/@md-plugins/vite-search-plugin',
  },
  stats: {
    downloads: {
      monthly: 1539,
      weekly: 248,
    },
  },
})
