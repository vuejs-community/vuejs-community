import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-openapi-gen-ts',
  description: 'OpenAPI rules generated typescript code for unplugin',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    '@kubb/core',
    'openapi',
    'unplugin',
    'typescript',
    'codegen',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/unplugin-openapi-gen-ts',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
