import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nuxie/tagger',
  description: 'Vite plugin to tag React components with metadata for Nuxie visual editor',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'component-tagging',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@nuxie/tagger',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 5,
    },
  },
})
