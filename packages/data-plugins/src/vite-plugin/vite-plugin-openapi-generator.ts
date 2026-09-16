import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-openapi-generator',
  description: 'A Vite plugin to generate TypeScript clients and DTOs from OpenAPI YAML files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'openapi',
    'typescript',
    'codegen',
    'yaml',
    'generator',
  ],
  source: {
    github: 'tonpseudo/vite-plugin-openapi-generator',
    npm: 'vite-plugin-openapi-generator',
  },
  links: {
    github: 'https://github.com/tonpseudo/vite-plugin-openapi-generator',
    npm: 'https://www.npmjs.com/package/vite-plugin-openapi-generator',
    website: 'https://github.com/tonpseudo/vite-plugin-openapi-generator#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
