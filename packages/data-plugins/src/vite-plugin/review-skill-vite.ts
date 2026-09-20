import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@review-skill/vite',
  description: 'Vite plugin for review-skill — skills as first-class typed modules (@skill/* virtual imports + auto-compile)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'skill',
    'markdown',
    'agent',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@review-skill/vite',
  },
  source: {
    npm: '@review-skill/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 314,
      weekly: 2,
    },
  },
})
