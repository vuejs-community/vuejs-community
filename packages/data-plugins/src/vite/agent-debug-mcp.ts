import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'agent-debug-mcp',
  description: 'Agent Debug MCP: local MCP server (stdio + streamable HTTP) bridging the Agent Debug MCP Chrome extension to coding agents, with built-in browser automation (embedded Playwright MCP re-exported as page_* tools), a CDP endpoint for external Playwright clie',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'mcp',
    'model-context-protocol',
    'react',
    'devtools',
    'tanstack',
    'playwright',
    'vite-plugin',
    'chrome-extension',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/muhsinmozilor/agent-debug-mcp',
    npm: 'https://www.npmjs.com/package/agent-debug-mcp',
  },
  stats: {
    downloads: {
      monthly: 147,
      weekly: 147,
    },
  },
})
