import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@spokbjorn/vite-plugin-openapi-typescript',
  description: 'Vite plugin to generate TypeScript types from OpenAPI specs using openapi-typescript',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'openapi',
    'swagger',
    'typescript',
    'codegen',
  ],
  links: {
    github: 'https://github.com/spokbjorn/openapi-typescript',
    npm: 'https://www.npmjs.com/package/@spokbjorn/vite-plugin-openapi-typescript',
    website: 'https://github.com/spokbjorn/openapi-typescript',
  },
  source: {
    github: 'spokbjorn/openapi-typescript',
    npm: '@spokbjorn/vite-plugin-openapi-typescript',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 201,
      weekly: 39,
    },
  },
})
