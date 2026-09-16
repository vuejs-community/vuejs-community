import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sveltekit-api-generator',
  description: 'Generates a Swagger UI and API client based on your SvelteKit API endpoints defined in +server.ts files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'sveltekit',
    'type-safety',
    'codegen',
    'swagger',
    'openapi',
  ],
  source: {
    npm: 'vite-plugin-sveltekit-api-generator',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-sveltekit-api-generator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 2,
    },
  },
})
