import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@review-skill/vite',
  description: 'Vite plugin for review-skill — skills as first-class typed modules (@skill/* virtual imports + auto-compile)',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'skill',
    'markdown',
    'agent',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@review-skill/vite',
  },
  stats: {
    downloads: {
      monthly: 302,
      weekly: 23,
    },
  },
})
