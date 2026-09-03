import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'claude-design-mode',
  description: 'Click an element in your running app and your coding agent edits the exact line that rendered it. Dev-time inspector, Vite plugin, and token-aware design sidebar for Claude Code and other agents.',
  version: '0.6.4',
  category: 'plugin',
  tags: [
    'claude',
    'claude-code',
    'design-mode',
    'vite-plugin',
    'inspector',
    'devtools',
    'react',
    'design-tokens',
    'ai-agent',
    'developer-tools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pokefang/design-mode',
    npm: 'https://www.npmjs.com/package/claude-design-mode',
  },
  stats: {
    downloads: {
      monthly: 666,
      weekly: 666,
    },
  },
})
