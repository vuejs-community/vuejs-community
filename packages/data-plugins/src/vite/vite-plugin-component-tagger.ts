import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-component-tagger',
  description: 'A Vite plugin for tagging components with metadata attributes for debugging and development',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-component-tagger',
  },
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
