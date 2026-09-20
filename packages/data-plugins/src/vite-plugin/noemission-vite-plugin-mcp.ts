import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@noemission/vite-plugin-mcp',
  description: 'MCP server helping models to understand your Vite app better.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'mcp',
    'modelcontextprotocol',
  ],
  links: {
    github: 'https://github.com/antfu/vite-plugin-mcp',
    npm: 'https://www.npmjs.com/package/@noemission/vite-plugin-mcp',
    website: 'https://github.com/antfu/vite-plugin-mcp#readme',
  },
  source: {
    github: 'antfu/vite-plugin-mcp',
    npm: '@noemission/vite-plugin-mcp',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 5,
    },
  },
})
