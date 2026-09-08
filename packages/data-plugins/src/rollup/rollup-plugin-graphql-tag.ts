import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-graphql-tag',
  description: 'Import graphql files with rollup',
  icon: 'logos:rollupjs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'graphql',
    'gql',
    'graphql-tag',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'timhall/rollup-plugin-graphql',
    npm: 'rollup-plugin-graphql-tag',
  },
  links: {
    github: 'https://github.com/timhall/rollup-plugin-graphql',
    npm: 'https://www.npmjs.com/package/rollup-plugin-graphql-tag',
  },
  stats: {
    downloads: {
      monthly: 132,
      weekly: 35,
    },
  },
})
