import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@developerehsan/api-client-vite',
  description: 'Vite plugin that auto-generates @developerehsan/api-client types on dev-server start and build (also covers TanStack Start).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'api-client',
    'vite',
    'vite-plugin',
    'openapi',
    'codegen',
    'tanstack-start',
    'typescript',
  ],
  source: {
    github: 'developerEhsan/api-client',
    npm: '@developerehsan/api-client-vite',
  },
  links: {
    github: 'https://github.com/developerEhsan/api-client',
    npm: 'https://www.npmjs.com/package/@developerehsan/api-client-vite',
    website: 'https://github.com/developerEhsan/api-client#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 50,
      weekly: 5,
    },
  },
})
