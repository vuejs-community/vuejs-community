import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'agent-output-optimizer',
  description: 'Agent-optimized output for Vite. Emits compact JSON when running inside an AI agent (Claude Code, Cursor, Devin, etc.).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'cmayorgahilario/agent-output-optimizer',
    npm: 'agent-output-optimizer',
  },
  links: {
    github: 'https://github.com/cmayorgahilario/agent-output-optimizer',
    npm: 'https://www.npmjs.com/package/agent-output-optimizer',
    website: 'https://github.com/cmayorgahilario/agent-output-optimizer#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 3,
    },
  },
})
