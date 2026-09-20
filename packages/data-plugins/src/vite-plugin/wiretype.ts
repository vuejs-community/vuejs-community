import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'wiretype',
  description: 'Record real API traffic and generate TypeScript types, zod schemas, MSW mocks, and OpenAPI 3.1 specs — from what your backend actually returns.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'typescript',
    'codegen',
    'type-generation',
    'zod',
    'msw',
    'openapi',
    'api',
    'http-proxy',
    'recorder',
    'mock',
    'vite-plugin',
    'schema-inference',
  ],
  links: {
    github: 'https://github.com/ehdrms785/wiretype',
    npm: 'https://www.npmjs.com/package/wiretype',
    website: 'https://github.com/ehdrms785/wiretype#readme',
  },
  source: {
    github: 'ehdrms785/wiretype',
    npm: 'wiretype',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 2,
    },
  },
})
