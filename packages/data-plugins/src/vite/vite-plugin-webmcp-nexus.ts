import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-webmcp-nexus',
  description: 'Vite plugin for WebMCP Nexus - auto-generates JSON Schema from TypeScript tool definitions at build time',
  version: '0.1.14',
  category: 'plugin',
  tags: [
    'webmcp',
    'mcp',
    'model-context-protocol',
    'vite',
    'vite-plugin',
    'ai-tools',
    'typescript',
    'build-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/alibaba/webmcp-nexus',
    npm: 'https://www.npmjs.com/package/vite-plugin-webmcp-nexus',
  },
  stats: {
    downloads: {
      monthly: 41,
      weekly: 3,
    },
  },
})
