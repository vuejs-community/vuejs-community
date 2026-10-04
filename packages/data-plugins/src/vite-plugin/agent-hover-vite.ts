import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@agent-hover/vite',
  description: 'Point at your UI. Your agent understands it. Vite dev plugin + local bridge server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'agent-hover',
    'vite-plugin',
    'react',
    'ai-agent',
    'mcp',
    'devtools',
  ],
  links: {
    github: 'https://github.com/Arc-coder07/agent-hover',
    npm: 'https://www.npmjs.com/package/@agent-hover/vite',
    website: 'https://github.com/Arc-coder07/agent-hover#readme',
  },
  source: {
    github: 'Arc-coder07/agent-hover',
    npm: '@agent-hover/vite',
  },
})
