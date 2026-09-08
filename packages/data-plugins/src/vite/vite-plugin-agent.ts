import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-agent',
  description: 'Vite plugin that exposes a structured MCP runtime for AI coding agents (toolchain diagnostics, module graph, HMR, build).',
  icon: 'logos:vite-icon',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'mcp',
    'agent',
    'ai',
    'devtools',
    'hmr',
    'diagnostics',
    'model-context-protocol',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'maxlee/vite-plugin-agent',
    npm: 'vite-plugin-agent',
  },
  links: {
    github: 'https://github.com/maxlee/vite-plugin-agent',
    npm: 'https://www.npmjs.com/package/vite-plugin-agent',
  },
  stats: {
    downloads: {
      monthly: 133,
      weekly: 12,
    },
  },
})
