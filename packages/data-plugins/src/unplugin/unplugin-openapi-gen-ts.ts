import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-openapi-gen-ts',
  description: 'OpenAPI rules generated typescript code for unplugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    '@kubb/core',
    'openapi',
    'unplugin',
    'typescript',
    'codegen',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/unplugin-openapi-gen-ts',
    website: 'https://github.com/uneva/unplugin-openapi-gen-ts',
  },
  source: {
    npm: 'unplugin-openapi-gen-ts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
