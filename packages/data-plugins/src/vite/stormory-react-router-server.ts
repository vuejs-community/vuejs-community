import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@stormory/react-router-server',
  description: 'Use a custom server application as the React Router server entry in Vite',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'express',
    'fastify',
    'hono',
    'koa',
    'nestjs',
    'react-router',
    'server',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stormory/react-router-server',
    npm: 'https://www.npmjs.com/package/@stormory/react-router-server',
  },
  stats: {
    downloads: {
      monthly: 205,
      weekly: 20,
    },
  },
})
