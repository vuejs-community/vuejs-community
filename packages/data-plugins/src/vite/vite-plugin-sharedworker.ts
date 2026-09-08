import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sharedworker',
  description: 'Make SharedWorker works like Remote Procedure Call easily',
  icon: 'logos:vite-icon',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'rpc',
    'sharedworker',
    'webworker',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'yjl9903/vite-plugin-sharedworker',
    npm: 'vite-plugin-sharedworker',
  },
  links: {
    github: 'https://github.com/yjl9903/vite-plugin-sharedworker',
    npm: 'https://www.npmjs.com/package/vite-plugin-sharedworker',
  },
  stats: {
    downloads: {
      monthly: 3728,
      weekly: 1000,
    },
  },
})
