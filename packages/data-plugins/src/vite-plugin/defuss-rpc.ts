import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'defuss-rpc',
  description: 'Remote Procedure Call (RPC) for defuss. Requires Node.js 20, 22, 24, or 25 (uses uWebSockets.js native addon). Linux requires glibc >= 2.38.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'kyr0/defuss',
    npm: 'defuss-rpc',
  },
  links: {
    github: 'https://github.com/kyr0/defuss',
    npm: 'https://www.npmjs.com/package/defuss-rpc',
    website: 'https://github.com/kyr0/defuss#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 197,
      weekly: 22,
    },
  },
})
