import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mcp',
  description: 'Create MCP servers directly in your Nuxt application with zero configuration.',
  icon: '',
  category: 'nuxt',
  types: [
    'AI',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/mcp-toolkit',
    npm: 'https://npmjs.com/package/@nuxtjs/mcp-toolkit',
    website: 'https://mcp-toolkit.nuxt.dev/getting-started/installation',
  },
  source: {
    github: 'nuxt-modules/mcp-toolkit#main/packages/nuxt-mcp-toolkit',
    npm: '@nuxtjs/mcp-toolkit',
  },
  stats: {
    stars: 172,
    downloads: {
      monthly: 128321,
      weekly: 30472,
    },
  },
})
