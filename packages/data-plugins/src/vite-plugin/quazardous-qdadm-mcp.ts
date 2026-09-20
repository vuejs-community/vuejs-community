import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@quazardous/qdadm-mcp',
  description: 'MCP server for running qdadm apps — agents debug a live app in one connection (vite dev plugin over the qdadm debug bridge)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mcp',
    'model-context-protocol',
    'qdadm',
    'debug',
    'vite-plugin',
    'ai-agent',
  ],
  links: {
    github: 'https://github.com/quazardous/qdadm',
    npm: 'https://www.npmjs.com/package/@quazardous/qdadm-mcp',
    website: 'https://github.com/quazardous/qdadm/tree/main/packages/qdadm-mcp#readme',
  },
  source: {
    github: 'quazardous/qdadm',
    npm: '@quazardous/qdadm-mcp',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 988,
      weekly: 468,
    },
  },
})
