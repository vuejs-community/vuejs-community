import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nuvio/vite-plugin',
  description: 'Nuvio Vite plugin 1.0 — dev WebSocket, source index, click-to-tag, secure patch writes for React + Tailwind.',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'nuvio',
    'vite',
    'vite-plugin',
    'devtools',
    'react',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ehah/Nuvio',
    npm: 'https://www.npmjs.com/package/@nuvio/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 51,
      weekly: 2,
    },
  },
})
