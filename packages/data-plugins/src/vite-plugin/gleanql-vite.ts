import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gleanql/vite',
  description: 'Glean\'s Vite plugin: provisions the runtime, runs codegen and compiles route reads to GraphQL operations',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'graphql',
    'vite-plugin',
    'compiler',
    'react',
    'rsc',
    'persisted-queries',
  ],
  links: {
    github: 'https://github.com/gleanql/gleanql',
    npm: 'https://www.npmjs.com/package/@gleanql/vite',
    website: 'https://gleanql.com',
  },
  source: {
    github: 'gleanql/gleanql',
    npm: '@gleanql/vite',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 86,
      weekly: 3,
    },
  },
})
