import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'iso-iterate',
  description: 'Iteration — a dev-only internal feedback loop for coding agents. One integration line adds a bottom-right panel where reviewers write notes like chat messages, optionally pinned to a real UI element, into a local gitignored file; a CLI lets the agent read',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'feedback',
    'review',
    'dev-tool',
    'vite-plugin',
    'coding-agent',
    'annotations',
    'design-review',
    'claude',
    'iteration',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aaroi/iso-iterate',
    npm: 'https://www.npmjs.com/package/iso-iterate',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
