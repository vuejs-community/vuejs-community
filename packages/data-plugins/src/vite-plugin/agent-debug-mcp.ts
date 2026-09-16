import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'agent-debug-mcp',
  description: 'Agent Debug MCP: local MCP server (stdio + streamable HTTP) bridging the Agent Debug MCP Chrome extension to coding agents, with built-in browser automation (embedded Playwright MCP re-exported as page_* tools), a CDP endpoint for external Playwright clie',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'muhsinmozilor/agent-debug-mcp',
    npm: 'agent-debug-mcp',
  },
  links: {
    github: 'https://github.com/muhsinmozilor/agent-debug-mcp',
    npm: 'https://www.npmjs.com/package/agent-debug-mcp',
    website: 'https://github.com/muhsinmozilor/agent-debug-mcp#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1502,
      weekly: 1349,
    },
  },
})
