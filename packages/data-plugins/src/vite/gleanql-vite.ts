import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gleanql/vite',
  description: 'Glean\'s Vite plugin: provisions the runtime, runs codegen and compiles route reads to GraphQL operations',
  version: '0.1.20',
  category: 'plugin',
  tags: [
    'graphql',
    'vite-plugin',
    'compiler',
    'react',
    'rsc',
    'persisted-queries',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gleanql/gleanql',
    npm: 'https://www.npmjs.com/package/@gleanql/vite',
  },
  stats: {
    downloads: {
      monthly: 153,
      weekly: 16,
    },
  },
})
