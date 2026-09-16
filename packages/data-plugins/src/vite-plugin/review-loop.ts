import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'review-loop',
  description: 'Bridge between human reviewers and coding agents — annotate rendered pages in-browser and export location-aware feedback. Works with Astro, Vite, and Express.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'viv/review-loop',
    npm: 'review-loop',
  },
  links: {
    github: 'https://github.com/viv/review-loop',
    npm: 'https://www.npmjs.com/package/review-loop',
    website: 'https://github.com/viv/review-loop#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
