import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-agent-quiet',
  description: 'Pause Vite\'s HMR during AI-agent edit bursts. Coalesce many edits into one reload.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'claude-code',
    'cursor',
    'aider',
    'ai-agent',
    'developer-experience',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ichiragshah/vite-plugin-agent-quiet',
    npm: 'https://www.npmjs.com/package/vite-plugin-agent-quiet',
  },
  stats: {
    downloads: {
      monthly: 61,
      weekly: 44,
    },
  },
})
