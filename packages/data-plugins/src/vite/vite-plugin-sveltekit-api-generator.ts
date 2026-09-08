import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sveltekit-api-generator',
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
    npm: 'vite-plugin-sveltekit-api-generator',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-sveltekit-api-generator',
  },
  stats: {
    downloads: {
      monthly: 38,
      weekly: 9,
    },
  },
})
