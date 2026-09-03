import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'defuss-rpc',
  description: 'Remote Procedure Call (RPC) for defuss. Requires Node.js 20, 22, 24, or 25 (uses uWebSockets.js native addon). Linux requires glibc >= 2.38.',
  version: '1.6.2',
  category: 'plugin',
  tags: [
    'rpc',
    'defuss',
    'astro',
    'ndjson',
    'streaming',
    'isomorphic',
    'astro-integration',
    'vite-plugin',
    'express-middleware',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kyr0/defuss',
    npm: 'https://www.npmjs.com/package/defuss-rpc',
  },
  stats: {
    downloads: {
      monthly: 200,
      weekly: 45,
    },
  },
})
