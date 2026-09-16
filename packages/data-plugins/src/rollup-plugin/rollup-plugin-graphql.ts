import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-graphql',
  description: 'Convert .gql/.graphql files to ES6 modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'graphql',
    'apollo',
    'import',
    'modules',
    'rollup-plugin',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-graphql',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-graphql',
    website: 'https://github.com/rollup/plugins/tree/master/packages/graphql#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 791440,
      weekly: 140912,
    },
  },
})
