import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-graphiql',
  description: 'Integrate GraphiQL IDE in your Vite projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'graphiql',
    'graphql',
  ],
  links: {
    github: 'https://github.com/mammadataei/vite-plugin-graphiql',
    npm: 'https://www.npmjs.com/package/vite-plugin-graphiql',
    website: 'https://github.com/mammadataei/vite-plugin-graphiql#readme',
  },
  source: {
    github: 'mammadataei/vite-plugin-graphiql',
    npm: 'vite-plugin-graphiql',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 1514,
      weekly: 15,
    },
  },
})
