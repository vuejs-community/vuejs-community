import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-openapi-generator',
  description: 'A Vite plugin to generate TypeScript clients and DTOs from OpenAPI YAML files.',
  version: '0.0.10',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'openapi',
    'typescript',
    'codegen',
    'yaml',
    'generator',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tonpseudo/vite-plugin-openapi-generator',
    npm: 'https://www.npmjs.com/package/vite-plugin-openapi-generator',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
