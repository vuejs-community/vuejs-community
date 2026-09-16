import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'filesystem-routing',
  description: 'Router-neutral file-system routing: scans a route directory into a neutral route manifest with pluggable conventions and delivery adapters',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'file-system routing',
    'file routes',
    'router',
    'vite',
    'vite-plugin',
    'solid',
  ],
  source: {
    github: 'solidjs/filesystem-routing',
    npm: 'filesystem-routing',
  },
  links: {
    github: 'https://github.com/solidjs/filesystem-routing',
    npm: 'https://www.npmjs.com/package/filesystem-routing',
    website: 'https://github.com/solidjs/filesystem-routing#readme',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 38327,
      weekly: 13975,
    },
  },
})
