import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'filesystem-routing',
  description: 'Router-neutral file-system routing: scans a route directory into a neutral route manifest with pluggable conventions and delivery adapters',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'file-system routing',
    'file routes',
    'router',
    'vite',
    'vite-plugin',
    'solid',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/solidjs/filesystem-routing',
    npm: 'https://www.npmjs.com/package/filesystem-routing',
  },
  stats: {
    downloads: {
      monthly: 14183,
      weekly: 9423,
    },
  },
})
