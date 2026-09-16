import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-simple-rpc',
  description: 'Minimal vite plugin that allows you to easily create simple fullstack apps with automatic RPC wrappers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-simple-rpc',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-simple-rpc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
