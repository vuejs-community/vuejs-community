import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hot-sw',
  description: 'Isolate build for service-worker',
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
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-hot-sw',
  },
  stats: {
    downloads: {
      monthly: 58,
      weekly: 4,
    },
  },
})
