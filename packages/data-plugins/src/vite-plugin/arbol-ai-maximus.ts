import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@arbol-ai/maximus',
  description: 'Maximus: define a service once and serve it over HTTP, MCP and Worker RPC on Cloudflare Workers, configured in vite.config.ts, with its OpenAPI and CLI.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'api',
    'cloudflare',
    'cloudflare-workers',
    'framework',
    'mcp',
    'model-context-protocol',
    'multi-tenant',
    'openapi',
    'rpc',
    'typebox',
    'vite',
    'vite-plugin',
    'vite-plus',
  ],
  links: {
    github: 'https://github.com/getarbol/maximus',
    npm: 'https://www.npmjs.com/package/@arbol-ai/maximus',
    website: 'https://github.com/getarbol/maximus#readme',
  },
  source: {
    github: 'getarbol/maximus',
    npm: '@arbol-ai/maximus',
  },
})
