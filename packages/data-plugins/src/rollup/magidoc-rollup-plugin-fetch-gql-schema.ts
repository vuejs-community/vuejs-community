import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@magidoc/rollup-plugin-fetch-gql-schema',
  description: 'A Rollup and ViteJS plugin that allows to fetch a GraphQL Schema from a target URL and save it to a target output folder.',
  version: '2.14.5',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'graphql',
    'graphql-schema',
    'magidoc',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/magidoc-org/magidoc',
    npm: 'https://www.npmjs.com/package/@magidoc/rollup-plugin-fetch-gql-schema',
  },
  stats: {
    downloads: {
      monthly: 229,
      weekly: 15,
    },
  },
})
