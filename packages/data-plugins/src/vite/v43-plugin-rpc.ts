import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin-rpc',
  description: 'V43 RPC plugin for Vite — \'use server\' directive transforms functions into WebSocket RPC calls',
  version: '0.1.10',
  category: 'plugin',
  tags: [
    'v43',
    'vite',
    'three',
    'threejs',
    'vite-plugin',
    'rpc',
    'use-server',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin-rpc',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 0,
    },
  },
})
