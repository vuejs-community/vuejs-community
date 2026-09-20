import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'spidey-sense',
  description: 'Click any element in your local React app, type a prompt, get a Claude Code or codex agent to edit the source on disk.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/imMatheus/spidey-sense',
    npm: 'https://www.npmjs.com/package/spidey-sense',
    website: 'https://github.com/imMatheus/spidey-sense#readme',
  },
  source: {
    github: 'imMatheus/spidey-sense',
    npm: 'spidey-sense',
  },
  stats: {
    stars: 41,
    downloads: {
      monthly: 1393,
      weekly: 296,
    },
  },
})
