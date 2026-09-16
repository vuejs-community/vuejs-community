import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-set-build-time',
  description: 'A plugin for vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'build-time',
    'set-build-time',
  ],
  source: {
    npm: 'vite-plugin-set-build-time',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-set-build-time',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
