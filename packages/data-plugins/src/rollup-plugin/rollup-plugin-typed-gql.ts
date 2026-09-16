import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typed-gql',
  description: 'Simple, unobtrusive and fully type safe GraphQL plugin.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'graphql',
    'gql',
    'types',
    'typescript',
  ],
  source: {
    github: 'omnysecurity/rollup-plugin-typed-gql',
    npm: 'rollup-plugin-typed-gql',
  },
  links: {
    github: 'https://github.com/omnysecurity/rollup-plugin-typed-gql',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typed-gql',
    website: 'https://github.com/omnysecurity/rollup-plugin-typed-gql#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 35,
      weekly: 12,
    },
  },
})
