import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nuvio/vite-plugin',
  description: 'Nuvio Vite plugin 1.0 — dev WebSocket, source index, click-to-tag, secure patch writes for React + Tailwind.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nuvio',
    'vite',
    'vite-plugin',
    'devtools',
    'react',
  ],
  source: {
    github: 'ehah/Nuvio',
    npm: '@nuvio/vite-plugin',
  },
  links: {
    github: 'https://github.com/ehah/Nuvio',
    npm: 'https://www.npmjs.com/package/@nuvio/vite-plugin',
    website: 'https://github.com/ehah/Nuvio#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 28,
      weekly: 8,
    },
  },
})
