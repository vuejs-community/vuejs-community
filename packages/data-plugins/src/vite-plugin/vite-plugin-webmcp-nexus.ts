import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-webmcp-nexus',
  description: 'Vite plugin for WebMCP Nexus - auto-generates JSON Schema from TypeScript tool definitions at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'alibaba/webmcp-nexus',
    npm: 'vite-plugin-webmcp-nexus',
  },
  links: {
    github: 'https://github.com/alibaba/webmcp-nexus',
    npm: 'https://www.npmjs.com/package/vite-plugin-webmcp-nexus',
    website: 'https://github.com/alibaba/webmcp-nexus#readme',
  },
  stats: {
    stars: 41,
    downloads: {
      monthly: 36,
      weekly: 13,
    },
  },
})
