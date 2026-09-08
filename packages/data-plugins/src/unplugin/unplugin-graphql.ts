import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-graphql',
  description: 'A universal bundler plugin which Converts .gql/.graphql(s) files to ES6 modules.',
  icon: 'icon:dark-unplugin',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'wzc520pyfm/unplugin-graphql',
    npm: 'unplugin-graphql',
  },
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-graphql',
    npm: 'https://www.npmjs.com/package/unplugin-graphql',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
