import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-mcp',
  description: 'A plugin for developers integrating MCP servers into Rollup.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'mcp',
    'modelcontextprotocol',
  ],
  source: {
    github: 'situ2001/unplugin-mcp',
    npm: 'rollup-plugin-mcp',
  },
  links: {
    github: 'https://github.com/situ2001/unplugin-mcp',
    npm: 'https://www.npmjs.com/package/rollup-plugin-mcp',
    website: 'https://github.com/situ2001/unplugin-mcp#readme',
  },
  stats: {
    stars: 31,
    downloads: {
      monthly: 30,
      weekly: 8,
    },
  },
})
