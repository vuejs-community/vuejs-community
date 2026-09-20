import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'claude-design-mode',
  description: 'Click an element in your running app and your coding agent edits the exact line that rendered it. Dev-time inspector, Vite plugin, and token-aware design sidebar for Claude Code and other agents.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/pokefang/design-mode',
    npm: 'https://www.npmjs.com/package/claude-design-mode',
    website: 'https://github.com/pokefang/design-mode#readme',
  },
  source: {
    github: 'pokefang/design-mode',
    npm: 'claude-design-mode',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 979,
      weekly: 304,
    },
  },
})
