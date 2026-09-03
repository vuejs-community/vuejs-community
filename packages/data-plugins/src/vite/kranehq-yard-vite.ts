import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kranehq/yard-vite',
  description: 'Vite plugin for Yard local hostname routing',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'yard',
    'vite',
    'vite-plugin',
    'localhost',
    'dev-proxy',
    'development',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/calasanmarko/yard',
    npm: 'https://www.npmjs.com/package/@kranehq/yard-vite',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
