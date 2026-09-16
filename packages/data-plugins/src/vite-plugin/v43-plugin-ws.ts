import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@v43/plugin-ws',
  description: 'V43 WebSocket plugin for Vite — manages browser/server connections',
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
    'websocket',
  ],
  source: {
    github: 'drawcall-ai/v43',
    npm: '@v43/plugin-ws',
  },
  links: {
    github: 'https://github.com/drawcall-ai/v43',
    npm: 'https://www.npmjs.com/package/@v43/plugin-ws',
    website: 'https://github.com/drawcall-ai/v43#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
