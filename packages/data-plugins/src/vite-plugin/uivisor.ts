import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'uivisor',
  description: 'Dev-only visual UI tweaker that turns mouse edits into a precise, breakpoint-aware prompt for your AI coding agent — without touching your source.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'next',
    'turbopack',
    'react',
    'devtools',
    'ai',
    'visual-editing',
    'tailwind',
  ],
  links: {
    github: 'https://github.com/kabdulov/uivisor',
    npm: 'https://www.npmjs.com/package/uivisor',
    website: 'https://github.com/kabdulov/uivisor#readme',
  },
  source: {
    github: 'kabdulov/uivisor',
    npm: 'uivisor',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 29,
      weekly: 10,
    },
  },
})
