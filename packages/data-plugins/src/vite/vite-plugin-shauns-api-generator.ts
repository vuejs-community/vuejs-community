import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shauns-api-generator',
  description: 'Generates a Swagger UI and API client based on your SvelteKit API endpoints defined in +server.ts files',
  icon: 'logos:vite-icon',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'sveltekit',
    'type-safety',
    'codegen',
    'swagger',
    'openapi',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-shauns-api-generator',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-shauns-api-generator',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
