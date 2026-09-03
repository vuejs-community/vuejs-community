import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'oxidejs',
  description: 'Vite/Rsbuild plugin. One build → dist/server.js + optional client. Server actions via *.server.ts.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'cloudflare',
    'rsbuild',
    'server-actions',
    'typescript',
    'unplugin',
    'vite',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/ryuzcorp/oxide',
    npm: 'https://www.npmjs.com/package/oxidejs',
  },
  stats: {
    downloads: {
      monthly: 2251,
      weekly: 678,
    },
  },
})
