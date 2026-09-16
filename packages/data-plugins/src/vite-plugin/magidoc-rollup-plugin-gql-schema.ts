import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@magidoc/rollup-plugin-gql-schema',
  description: 'A Rollup and ViteJS plugin that allows to parse a GraphQL Schema from a target URL and save it to a target output folder, or to parse it from the disk and convert it to a desired format.',
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
    npm: '@magidoc/rollup-plugin-gql-schema',
  },
  links: {
    github: 'https://github.com/magidoc-org/magidoc',
    npm: 'https://www.npmjs.com/package/@magidoc/rollup-plugin-gql-schema',
    website: 'https://magidoc.js.org/plugins/rollup-graphql-schema',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 93575,
      weekly: 20348,
    },
  },
})
