import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mountly-mcp',
  description: 'Build MCP Apps (SEP-1865) views from React, Vue or Svelte components — new or existing. One build emits the ui:// resource, its sidecar, and the MCP server wiring.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'chatgpt',
    'claude',
    'mcp',
    'mcp-apps',
    'mcp-apps-view',
    'mcp-ui',
    'mcp-view',
    'model-context-protocol',
    'react',
    'sep-1865',
    'svelte',
    'ui-resource',
    'vite-plugin',
    'vue',
  ],
  source: {
    github: 'jagreehal/mountly',
    npm: 'mountly-mcp',
  },
  links: {
    github: 'https://github.com/jagreehal/mountly',
    npm: 'https://www.npmjs.com/package/mountly-mcp',
    website: 'https://github.com/jagreehal/mountly#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 898,
      weekly: 14,
    },
  },
})
