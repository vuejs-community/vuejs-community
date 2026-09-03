import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-openapi-codegen',
  description: 'Vite plugin that generates typed API clients and route builders from OpenAPI specs',
  version: '5.0.2',
  category: 'plugin',
  tags: [
    'api-client',
    'codegen',
    'openapi',
    'openapi-typescript',
    'route-builder',
    'vite',
    'vite-plugin',
    'vite-plus',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/GGGLHHH/vite-plugin-openapi-codegen',
    npm: 'https://www.npmjs.com/package/vite-plugin-openapi-codegen',
  },
  stats: {
    downloads: {
      monthly: 144,
      weekly: 6,
    },
  },
})
