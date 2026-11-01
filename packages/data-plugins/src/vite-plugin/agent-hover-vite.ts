import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@agent-hover/vite',
  description: 'See every UI change your agent makes, right on the page. Dev-only Vite plugin for React: ask for a change on any element, track it there while Claude Code, Cursor, Codex or any MCP agent works, then compare, keep, undo or follow up.',
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
    github: 'https://github.com/amrnadh/agent-hover',
    npm: 'https://www.npmjs.com/package/@agent-hover/vite',
    website: 'https://github.com/amrnadh/agent-hover#readme',
  },
  source: {
    github: 'amrnadh/agent-hover',
    npm: '@agent-hover/vite',
  },
})
