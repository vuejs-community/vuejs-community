import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@developerehsan/api-client-vite',
  description: 'Vite plugin that auto-generates @developerehsan/api-client types on dev-server start and build (also covers TanStack Start).',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'api-client',
    'vite',
    'vite-plugin',
    'openapi',
    'codegen',
    'tanstack-start',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/developerEhsan/api-client',
    npm: 'https://www.npmjs.com/package/@developerehsan/api-client-vite',
  },
  stats: {
    downloads: {
      monthly: 222,
      weekly: 12,
    },
  },
})
