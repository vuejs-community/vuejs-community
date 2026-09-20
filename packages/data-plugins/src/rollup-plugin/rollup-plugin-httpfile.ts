import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-httpfile',
  description: 'Rollup httpfile plugin to support import http file for HTTP Request/GraphQL request',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'httpfile',
  ],
  links: {
    github: 'https://github.com/servicex-sh/rollup-plugin-httpfile',
    npm: 'https://www.npmjs.com/package/rollup-plugin-httpfile',
    website: 'https://github.com/servicex-sh/rollup-plugin-httpfile#readme',
  },
  source: {
    github: 'servicex-sh/rollup-plugin-httpfile',
    npm: 'rollup-plugin-httpfile',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
