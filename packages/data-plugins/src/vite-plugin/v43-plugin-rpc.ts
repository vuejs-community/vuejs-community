import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin-rpc',
  description: 'V43 RPC plugin for Vite — \'use server\' directive transforms functions into WebSocket RPC calls',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'v43',
    'vite',
    'three',
    'threejs',
    'vite-plugin',
    'rpc',
    'use-server',
  ],
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin-rpc',
    website: 'https://github.com/drawcall-ai/v43#readme',
  },
  source: {
    github: 'drawcall-ai/v43',
    npm: '@v43/plugin-rpc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
