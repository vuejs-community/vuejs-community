import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hot-sw',
  description: 'Isolate build for service-worker',
  icon: 'logos:vite-icon',
  version: '2.4.8',
  category: 'plugin',
  tags: [
    'service-worker',
    'hot-reload',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-hot-sw',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-hot-sw',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 1,
    },
  },
})
