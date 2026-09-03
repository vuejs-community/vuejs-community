import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'agent-output-optimizer',
  description: 'Agent-optimized output for Vite. Emits compact JSON when running inside an AI agent (Claude Code, Cursor, Devin, etc.).',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ai',
    'agent',
    'claude',
    'cursor',
    'json',
    'logger',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cmayorgahilario/agent-output-optimizer',
    npm: 'https://www.npmjs.com/package/agent-output-optimizer',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 5,
    },
  },
})
