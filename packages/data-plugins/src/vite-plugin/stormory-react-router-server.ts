import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stormory/react-router-server',
  description: 'Use a custom server application as the React Router server entry in Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'stormory/react-router-server',
    npm: '@stormory/react-router-server',
  },
  links: {
    github: 'https://github.com/stormory/react-router-server',
    npm: 'https://www.npmjs.com/package/@stormory/react-router-server',
    website: 'https://github.com/stormory/react-router-server#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 217,
      weekly: 5,
    },
  },
})
