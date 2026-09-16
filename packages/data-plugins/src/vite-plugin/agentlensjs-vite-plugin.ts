import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@agentlensjs/vite-plugin',
  description: 'Vite plugin that injects the AgentLens runtime SDK into your app during development.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'agentlens',
    'vite-plugin',
    'mcp',
    'ai-agent',
    'devtools',
  ],
  source: {
    github: 'YoungDan-hero/agentlens',
    npm: '@agentlensjs/vite-plugin',
  },
  links: {
    github: 'https://github.com/YoungDan-hero/agentlens',
    npm: 'https://www.npmjs.com/package/@agentlensjs/vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 168,
      weekly: 19,
    },
  },
})
