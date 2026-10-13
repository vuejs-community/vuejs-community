import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@agent-hover/vite',
  description: 'Point at your UI, your agent understands it. Dev-only Vite plugin for React: click any element and send precise context to Claude Code, Cursor, Codex or any MCP agent.',
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
