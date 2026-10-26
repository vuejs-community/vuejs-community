import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@menapo/api',
  description: 'Typed REST operations on Hono: one object per method and URL, validated input and output, problem+json errors, a URL-keyed browser client, OpenAPI and MCP from the same definitions',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'api',
    'hono',
    'mcp',
    'openapi',
    'standard-schema',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/menapo/kit',
    npm: 'https://www.npmjs.com/package/@menapo/api',
    website: 'https://github.com/menapo/kit/blob/main/packages/api/docs/PLAN.md',
  },
  source: {
    github: 'menapo/kit',
    npm: '@menapo/api',
  },
})
