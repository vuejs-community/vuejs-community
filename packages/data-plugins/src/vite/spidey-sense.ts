import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'spidey-sense',
  description: 'Click any element in your local React app, type a prompt, get a Claude Code or codex agent to edit the source on disk.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'claude',
    'claude-code',
    'codex',
    'react',
    'devtools',
    'vite-plugin',
    'agent',
    'cli',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/imMatheus/spidey-sense',
    npm: 'https://www.npmjs.com/package/spidey-sense',
  },
  stats: {
    downloads: {
      monthly: 1092,
      weekly: 334,
    },
  },
})
