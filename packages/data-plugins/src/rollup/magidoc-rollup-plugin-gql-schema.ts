import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@magidoc/rollup-plugin-gql-schema',
  description: 'A Rollup and ViteJS plugin that allows to parse a GraphQL Schema from a target URL and save it to a target output folder, or to parse it from the disk and convert it to a desired format.',
  version: '7.0.0',
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
    npm: 'https://www.npmjs.com/package/@magidoc/rollup-plugin-gql-schema',
  },
  stats: {
    downloads: {
      monthly: 82612,
      weekly: 27725,
    },
  },
})
