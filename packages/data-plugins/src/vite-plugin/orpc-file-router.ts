import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'orpc-file-router',
  description: 'File-based routing for oRPC v2: generates a fully typed, lazily loaded router from a directory of files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Prains/orpc-file-router',
    npm: 'https://www.npmjs.com/package/orpc-file-router',
    website: 'https://github.com/Prains/orpc-file-router#readme',
  },
  source: {
    github: 'Prains/orpc-file-router',
    npm: 'orpc-file-router',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 179,
      weekly: 3,
    },
  },
})
