import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-graphql-import',
  description: 'Rollup plugin to import graphql schema definitions',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'graphql',
    'import',
    'rollup-plugin',
    'schema',
  ],
  links: {
    github: 'https://github.com/psirenny/rollup-plugin-graphql-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-graphql-import',
    website: 'https://github.com/psirenny/rollup-plugin-graphql-import',
  },
  source: {
    github: 'psirenny/rollup-plugin-graphql-import',
    npm: 'rollup-plugin-graphql-import',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
