import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jeboehm/vite-plugin-graphql',
  description: 'Imports .graphql files as persistent query extension or as they are',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'graphql',
    'persistent-query',
  ],
  source: {
    github: 'jeboehm/vite-plugin-graphql',
    npm: '@jeboehm/vite-plugin-graphql',
  },
  links: {
    github: 'https://github.com/jeboehm/vite-plugin-graphql',
    npm: 'https://www.npmjs.com/package/@jeboehm/vite-plugin-graphql',
    website: 'https://github.com/jeboehm/vite-plugin-graphql#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
