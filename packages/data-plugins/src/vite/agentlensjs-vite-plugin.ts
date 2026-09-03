import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@agentlensjs/vite-plugin',
  description: 'Vite plugin that injects the AgentLens runtime SDK into your app during development.',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'agentlens',
    'vite-plugin',
    'mcp',
    'ai-agent',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/YoungDan-hero/agentlens',
    npm: 'https://www.npmjs.com/package/@agentlensjs/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 1975,
      weekly: 38,
    },
  },
})
