import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'margo-dev',
  description: 'Live-app feedback layer for AI-coding teams. Comments live as files in your repo; AI works through them.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'feedback',
    'annotation',
    'claude-code',
    'ai-coding',
    'vite-plugin',
    'nextjs',
    'design-collaboration',
    'comments',
    'review',
  ],
  links: {
    github: 'https://github.com/margolabs/margo',
    npm: 'https://www.npmjs.com/package/margo-dev',
    website: 'https://github.com/margolabs/margo#readme',
  },
  source: {
    github: 'margolabs/margo',
    npm: 'margo-dev',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 105,
      weekly: 12,
    },
  },
})
