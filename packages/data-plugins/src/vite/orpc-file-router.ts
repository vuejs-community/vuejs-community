import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'orpc-file-router',
  description: 'File-based routing for oRPC v2: generates a fully typed, lazily loaded router from a directory of files',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'orpc',
    'rpc',
    'file-based-routing',
    'file-router',
    'router',
    'codegen',
    'typescript',
    'vite-plugin',
    'openapi',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Prains/orpc-file-router',
    npm: 'https://www.npmjs.com/package/orpc-file-router',
  },
  stats: {
    downloads: {
      monthly: 172,
      weekly: 11,
    },
  },
})
