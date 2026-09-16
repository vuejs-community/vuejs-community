import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@magidoc/rollup-plugin-parse-gql-schema',
  description: 'A Rollup and ViteJS plugin that allows to fetch a GraphQL Schema from a target URL and save it to a target output folder.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'graphql',
    'graphql-schema',
    'magidoc',
  ],
  source: {
    github: 'magidoc-org/magidoc',
    npm: '@magidoc/rollup-plugin-parse-gql-schema',
  },
  links: {
    github: 'https://github.com/magidoc-org/magidoc',
    npm: 'https://www.npmjs.com/package/@magidoc/rollup-plugin-parse-gql-schema',
    website: 'https://magidoc.js.org/plugins/rollup-parse-graphql-schema',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 51,
      weekly: 9,
    },
  },
})
