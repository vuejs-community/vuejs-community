import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-node-worker',
  description: 'Vite plugin for Node.js worker threads. Supports DEV and BUILD modes.',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'worker',
    'node',
    'nodejs',
    'worker-threads',
    'dev',
    'development',
    'build',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aheissenberger/vite-plugin-node-worker',
    npm: 'https://www.npmjs.com/package/vite-plugin-node-worker',
  },
  stats: {
    downloads: {
      monthly: 858,
      weekly: 196,
    },
  },
})
