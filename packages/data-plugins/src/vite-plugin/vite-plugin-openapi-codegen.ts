import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-openapi-codegen',
  description: 'Vite plugin that generates typed API clients and route builders from OpenAPI specs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'GGGLHHH/vite-plugin-openapi-codegen',
    npm: 'vite-plugin-openapi-codegen',
  },
  links: {
    github: 'https://github.com/GGGLHHH/vite-plugin-openapi-codegen',
    npm: 'https://www.npmjs.com/package/vite-plugin-openapi-codegen',
    website: 'https://github.com/GGGLHHH/vite-plugin-openapi-codegen#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 108,
      weekly: 7,
    },
  },
})
