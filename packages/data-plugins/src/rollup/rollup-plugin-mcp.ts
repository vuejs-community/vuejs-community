import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mcp',
  description: 'A plugin for developers integrating MCP servers into Rollup.',
  version: '0.0.12',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'mcp',
    'modelcontextprotocol',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/situ2001/unplugin-mcp',
    npm: 'https://www.npmjs.com/package/rollup-plugin-mcp',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 10,
    },
  },
})
