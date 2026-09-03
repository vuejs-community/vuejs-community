import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@quazardous/qdadm-mcp',
  description: 'MCP server for running qdadm apps — agents debug a live app in one connection (vite dev plugin over the qdadm debug bridge)',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'mcp',
    'model-context-protocol',
    'qdadm',
    'debug',
    'vite-plugin',
    'ai-agent',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/quazardous/qdadm',
    npm: 'https://www.npmjs.com/package/@quazardous/qdadm-mcp',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 7,
    },
  },
})
