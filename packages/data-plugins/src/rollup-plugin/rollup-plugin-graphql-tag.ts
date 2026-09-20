import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-graphql-tag',
  description: 'Import graphql files with rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'graphql',
    'gql',
    'graphql-tag',
  ],
  links: {
    github: 'https://github.com/timhall/rollup-plugin-graphql',
    npm: 'https://www.npmjs.com/package/rollup-plugin-graphql-tag',
    website: 'https://github.com/timhall/rollup-plugin-graphql#readme',
  },
  source: {
    github: 'timhall/rollup-plugin-graphql',
    npm: 'rollup-plugin-graphql-tag',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 116,
      weekly: 23,
    },
  },
})
