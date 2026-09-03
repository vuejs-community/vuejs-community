import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'review-loop',
  description: 'Bridge between human reviewers and coding agents — annotate rendered pages in-browser and export location-aware feedback. Works with Astro, Vite, and Express.',
  version: '0.9.0',
  category: 'plugin',
  tags: [
    'astro-integration',
    'vite-plugin',
    'express-middleware',
    'annotation',
    'review',
    'developer-tools',
    'copy-review',
    'ai-agents',
    'code-review',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/viv/review-loop',
    npm: 'https://www.npmjs.com/package/review-loop',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 4,
    },
  },
})
