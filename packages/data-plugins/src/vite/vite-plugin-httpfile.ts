import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-httpfile',
  description: 'Vite httpfile plugin to support import http file for HTTP Request/GraphQL request',
  icon: 'logos:vite-icon',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'httpfile',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'servicex-sh/vite-plugin-httpfile',
    npm: 'vite-plugin-httpfile',
  },
  links: {
    github: 'https://github.com/servicex-sh/vite-plugin-httpfile',
    npm: 'https://www.npmjs.com/package/vite-plugin-httpfile',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 4,
    },
  },
})
