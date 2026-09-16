import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-graphql-minify-schema',
  description: 'Minifies your GraphQL Schema JSON in Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'graphql',
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'hummingbird-me/graphql-minify-schema',
    npm: 'rollup-plugin-graphql-minify-schema',
  },
  links: {
    github: 'https://github.com/hummingbird-me/graphql-minify-schema',
    npm: 'https://www.npmjs.com/package/rollup-plugin-graphql-minify-schema',
    website: 'https://github.com/hummingbird-me/graphql-minify-schema#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 4,
    },
  },
})
