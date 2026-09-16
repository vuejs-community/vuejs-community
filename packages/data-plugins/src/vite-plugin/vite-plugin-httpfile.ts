import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-httpfile',
  description: 'Vite httpfile plugin to support import http file for HTTP Request/GraphQL request',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'httpfile',
  ],
  source: {
    github: 'servicex-sh/vite-plugin-httpfile',
    npm: 'vite-plugin-httpfile',
  },
  links: {
    github: 'https://github.com/servicex-sh/vite-plugin-httpfile',
    npm: 'https://www.npmjs.com/package/vite-plugin-httpfile',
    website: 'https://github.com/servicex-sh/vite-plugin-httpfile#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
