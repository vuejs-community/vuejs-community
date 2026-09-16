import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-mcp-server',
  description: 'A Vue MCP server exposed as a Vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'mcp',
  ],
  source: {
    github: 'ElisePatrikainen/vue-mcp-tests',
    npm: 'vue-mcp-server',
  },
  links: {
    github: 'https://github.com/ElisePatrikainen/vue-mcp-tests',
    npm: 'https://www.npmjs.com/package/vue-mcp-server',
    website: 'https://github.com/ElisePatrikainen/vue-mcp-tests#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 4,
    },
  },
})
