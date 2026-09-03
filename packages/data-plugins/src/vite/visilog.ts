import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'visilog',
  description: 'Stream browser console logs to files for LLM debugging. Zero-config setup with simple imports. No MCP required - just tell your LLM to read the log files.',
  version: '0.7.5',
  category: 'plugin',
  tags: [
    'llm',
    'browser-logs',
    'console-streaming',
    'ai-assistant',
    'development-tools',
    'log-visibility',
    'vite-plugin',
    'webpack-plugin',
    'websocket-logging',
    'file-based-logs',
    'no-mcp',
    'debugging',
    'real-time-logs',
    'typescript',
    'developer-experience',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ineffably/visilog',
    npm: 'https://www.npmjs.com/package/visilog',
  },
  stats: {
    downloads: {
      monthly: 48,
      weekly: 15,
    },
  },
})
