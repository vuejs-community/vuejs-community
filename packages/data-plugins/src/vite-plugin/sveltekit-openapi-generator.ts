import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sveltekit-openapi-generator',
  description: 'Generate OpenAPI 3.0 specifications from SvelteKit server endpoints using JSDoc @swagger annotations',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'Michael-Obele/sveltekit-api-gen',
    npm: 'sveltekit-openapi-generator',
  },
  links: {
    github: 'https://github.com/Michael-Obele/sveltekit-api-gen',
    npm: 'https://www.npmjs.com/package/sveltekit-openapi-generator',
    website: 'https://oapi.svelte-apps.me/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2057,
      weekly: 473,
    },
  },
})
