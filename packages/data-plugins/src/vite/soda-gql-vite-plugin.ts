import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@soda-gql/vite-plugin',
  description: 'Vite plugin for soda-gql',
  version: '0.15.0',
  category: 'plugin',
  tags: [
    'graphql',
    'codegen',
    'zero-runtime',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/whatasoda/soda-gql',
    npm: 'https://www.npmjs.com/package/@soda-gql/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 1141,
      weekly: 226,
    },
  },
})
