import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vue-mcp-server',
  description: 'A Vue MCP server exposed as a Vite plugin',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'mcp',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ElisePatrikainen/vue-mcp-tests',
    npm: 'https://www.npmjs.com/package/vue-mcp-server',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 0,
    },
  },
})
