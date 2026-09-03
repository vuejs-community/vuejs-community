import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'sveltekit-openapi-generator',
  description: 'Generate OpenAPI 3.0 specifications from SvelteKit server endpoints using JSDoc @swagger annotations',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'sveltekit',
    'openapi',
    'swagger',
    'vite-plugin',
    'api-documentation',
    'jsdoc',
    'openapi-spec',
    'rest-api',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Michael-Obele/sveltekit-api-gen',
    npm: 'https://www.npmjs.com/package/sveltekit-openapi-generator',
  },
  stats: {
    downloads: {
      monthly: 2493,
      weekly: 640,
    },
  },
})
