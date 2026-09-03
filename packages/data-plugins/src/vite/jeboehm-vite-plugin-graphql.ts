import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jeboehm/vite-plugin-graphql',
  description: 'Imports .graphql files as persistent query extension or as they are',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'graphql',
    'persistent-query',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jeboehm/vite-plugin-graphql',
    npm: 'https://www.npmjs.com/package/@jeboehm/vite-plugin-graphql',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 7,
    },
  },
})
