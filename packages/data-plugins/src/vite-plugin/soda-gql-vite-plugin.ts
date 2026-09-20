import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@soda-gql/vite-plugin',
  description: 'Vite plugin for soda-gql',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'graphql',
    'codegen',
    'zero-runtime',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/whatasoda/soda-gql',
    npm: 'https://www.npmjs.com/package/@soda-gql/vite-plugin',
    website: 'https://github.com/whatasoda/soda-gql#readme',
  },
  source: {
    github: 'whatasoda/soda-gql',
    npm: '@soda-gql/vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1961,
      weekly: 1175,
    },
  },
})
