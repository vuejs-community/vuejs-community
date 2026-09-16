import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vitepress-plugin-mcp',
  description: 'Search MCP Server for VitePress',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitepress',
    'vite',
    'vite-plugin',
    'MCP',
  ],
  source: {
    github: 'Hal-Spidernight/vitepress-plugin-mcp',
    npm: 'vitepress-plugin-mcp',
  },
  links: {
    github: 'https://github.com/Hal-Spidernight/vitepress-plugin-mcp',
    npm: 'https://www.npmjs.com/package/vitepress-plugin-mcp',
    website: 'https://github.com/Hal-Spidernight/vitepress-plugin-mcp#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 32,
      weekly: 7,
    },
  },
})
