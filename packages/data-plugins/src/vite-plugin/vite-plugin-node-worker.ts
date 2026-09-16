import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-node-worker',
  description: 'Vite plugin for Node.js worker threads. Supports DEV and BUILD modes.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'aheissenberger/vite-plugin-node-worker',
    npm: 'vite-plugin-node-worker',
  },
  links: {
    github: 'https://github.com/aheissenberger/vite-plugin-node-worker',
    npm: 'https://www.npmjs.com/package/vite-plugin-node-worker',
    website: 'https://github.com/aheissenberger/vite-plugin-node-worker#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 720,
      weekly: 83,
    },
  },
})
