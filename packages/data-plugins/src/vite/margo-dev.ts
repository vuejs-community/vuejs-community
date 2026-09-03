import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'margo-dev',
  description: 'Live-app feedback layer for AI-coding teams. Comments live as files in your repo; AI works through them.',
  version: '0.4.7',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/margolabs/margo',
    npm: 'https://www.npmjs.com/package/margo-dev',
  },
  stats: {
    downloads: {
      monthly: 213,
      weekly: 11,
    },
  },
})
