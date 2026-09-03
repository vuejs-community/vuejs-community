import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@noemission/vite-plugin-mcp',
  description: 'MCP server helping models to understand your Vite app better.',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'mcp',
    'modelcontextprotocol',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/antfu/vite-plugin-mcp',
    npm: 'https://www.npmjs.com/package/@noemission/vite-plugin-mcp',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 12,
    },
  },
})
