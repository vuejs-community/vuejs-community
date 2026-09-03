import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-httpfile',
  description: 'Rollup httpfile plugin to support import http file for HTTP Request/GraphQL request',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'httpfile',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/servicex-sh/rollup-plugin-httpfile',
    npm: 'https://www.npmjs.com/package/rollup-plugin-httpfile',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 6,
    },
  },
})
