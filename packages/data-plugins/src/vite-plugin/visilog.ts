import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'visilog',
  description: 'Stream browser console logs to files for LLM debugging. Zero-config setup with simple imports. No MCP required - just tell your LLM to read the log files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/ineffably/visilog',
    npm: 'https://www.npmjs.com/package/visilog',
    website: 'https://github.com/ineffably/visilog#readme',
  },
  source: {
    github: 'ineffably/visilog',
    npm: 'visilog',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 2,
    },
  },
})
