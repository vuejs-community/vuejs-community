import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-agent',
  description: 'Vite plugin that exposes a structured MCP runtime for AI coding agents (toolchain diagnostics, module graph, HMR, build).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/maxlee/vite-plugin-agent',
    npm: 'https://www.npmjs.com/package/vite-plugin-agent',
    website: 'https://github.com/maxlee/vite-plugin-agent#readme',
  },
  source: {
    github: 'maxlee/vite-plugin-agent',
    npm: 'vite-plugin-agent',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 1,
    },
  },
})
