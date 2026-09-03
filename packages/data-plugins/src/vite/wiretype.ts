import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'wiretype',
  description: 'Record real API traffic and generate TypeScript types, zod schemas, MSW mocks, and OpenAPI 3.1 specs — from what your backend actually returns.',
  version: '0.4.4',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ehdrms785/wiretype',
    npm: 'https://www.npmjs.com/package/wiretype',
  },
  stats: {
    downloads: {
      monthly: 63,
      weekly: 8,
    },
  },
})
