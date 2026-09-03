import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-httpfile',
  description: 'Vite httpfile plugin to support import http file for HTTP Request/GraphQL request',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'httpfile',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/servicex-sh/vite-plugin-httpfile',
    npm: 'https://www.npmjs.com/package/vite-plugin-httpfile',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 8,
    },
  },
})
