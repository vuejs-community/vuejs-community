import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pk-annotator',
  description: 'Dev-only browser annotation overlay for Vite apps that sends picked elements, captures, and prompts to Claude Code and Codex through an MCP server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'annotation',
    'claude-code',
    'codex',
    'devtools',
    'mcp',
    'react',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pbkimdev/pk-annotator',
    npm: 'https://www.npmjs.com/package/pk-annotator',
    website: 'https://pk-annotator.paulbkim.dev',
  },
  source: {
    github: 'pbkimdev/pk-annotator',
    npm: 'pk-annotator',
  },
})
