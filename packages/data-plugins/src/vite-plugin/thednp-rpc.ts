import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@thednp/rpc',
  description: '⚡ A Vite plugin for creating server functions with automatic Remote Procedure Calls (RPC)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rpc',
    'vite',
    'vite-plugin',
    'express',
    'fastify',
    'hono',
    'koa',
    'h3',
  ],
  source: {
    github: 'thednp/rpc',
    npm: '@thednp/rpc',
  },
  links: {
    github: 'https://github.com/thednp/rpc',
    npm: 'https://www.npmjs.com/package/@thednp/rpc',
    website: 'https://github.com/thednp/rpc#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 596,
      weekly: 12,
    },
  },
})
