import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@md-plugins/vite-search-plugin',
  description: 'A Vite plugin that generates search index data for Markdown and Q-Press documentation sites.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/md-plugins/md-plugins',
    npm: 'https://www.npmjs.com/package/@md-plugins/vite-search-plugin',
    website: 'https://github.com/md-plugins',
  },
  source: {
    github: 'md-plugins/md-plugins',
    npm: '@md-plugins/vite-search-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 610,
      weekly: 25,
    },
  },
})
