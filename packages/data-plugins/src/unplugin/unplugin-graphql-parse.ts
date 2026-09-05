import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-graphql-parse',
  description: 'Parse GraphQL SDL files to DocumentNode AST objects. This is useful for passing it to Graphql Servers, for example.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'graphql',
    'unplugin',
    'esbuild',
    'vite',
    'webpack',
    'rollup',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/gympass/unplugins',
    npm: 'https://www.npmjs.com/package/unplugin-graphql-parse',
  },
  stats: {
    downloads: {
      monthly: 82,
      weekly: 14,
    },
  },
})
