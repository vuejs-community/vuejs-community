import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-graphql',
  description: 'A universal bundler plugin which Converts .gql/.graphql(s) files to ES6 modules.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-graphql',
    npm: 'https://www.npmjs.com/package/unplugin-graphql',
    website: 'https://github.com/wzc520pyfm/unplugin-graphql#readme',
  },
  source: {
    github: 'wzc520pyfm/unplugin-graphql',
    npm: 'unplugin-graphql',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
