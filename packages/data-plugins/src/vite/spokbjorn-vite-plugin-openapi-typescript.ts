import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@spokbjorn/vite-plugin-openapi-typescript',
  description: 'Vite plugin to generate TypeScript types from OpenAPI specs using openapi-typescript',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'openapi',
    'swagger',
    'typescript',
    'codegen',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/spokbjorn/openapi-typescript',
    npm: 'https://www.npmjs.com/package/@spokbjorn/vite-plugin-openapi-typescript',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 5,
    },
  },
})
