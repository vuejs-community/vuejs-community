import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sharedworker',
  description: 'Make SharedWorker works like Remote Procedure Call easily',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rpc',
    'sharedworker',
    'webworker',
  ],
  source: {
    github: 'yjl9903/vite-plugin-sharedworker',
    npm: 'vite-plugin-sharedworker',
  },
  links: {
    github: 'https://github.com/yjl9903/vite-plugin-sharedworker',
    npm: 'https://www.npmjs.com/package/vite-plugin-sharedworker',
    website: 'https://github.com/yjl9903/vite-plugin-sharedworker#readme',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 3183,
      weekly: 693,
    },
  },
})
