import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-component-tagger',
  description: 'A Vite plugin for tagging components with metadata attributes for debugging and development',
  version: '0.2.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'component',
    'tagger',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-component-tagger',
  },
  stats: {
    downloads: {
      monthly: 500,
      weekly: 166,
    },
  },
})
