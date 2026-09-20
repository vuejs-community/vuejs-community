import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nuxie/tagger',
  description: 'Vite plugin to tag React components with metadata for Nuxie visual editor',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'component-tagging',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@nuxie/tagger',
  },
  source: {
    npm: '@nuxie/tagger',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
