import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mcp',
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
    github: 'https://github.com/antfu/nuxt-mcp-dev',
    npm: 'https://www.npmjs.com/package/vite-plugin-mcp',
    website: 'https://github.com/antfu/nuxt-mcp-dev/tree/main/packages/vite-plugin-mcp',
  },
  source: {
    github: 'antfu/nuxt-mcp-dev',
    npm: 'vite-plugin-mcp',
  },
  stats: {
    stars: 910,
    downloads: {
      monthly: 22948,
      weekly: 5050,
    },
  },
})
