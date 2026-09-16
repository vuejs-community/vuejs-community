import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hot-sw',
  description: 'Isolate build for service-worker',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'service-worker',
    'hot-reload',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-hot-sw',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-hot-sw',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
