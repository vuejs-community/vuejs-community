import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-graphql-parse',
  description: 'Parse GraphQL SDL files to DocumentNode AST objects. This is useful for passing it to Graphql Servers, for example.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'graphql',
    'unplugin',
    'esbuild',
    'vite',
    'webpack',
    'rollup',
  ],
  source: {
    github: 'gympass/unplugins',
    npm: 'unplugin-graphql-parse',
  },
  links: {
    github: 'https://github.com/gympass/unplugins',
    npm: 'https://www.npmjs.com/package/unplugin-graphql-parse',
    website: 'https://github.com/gympass/unplugins#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 68,
      weekly: 3,
    },
  },
})
