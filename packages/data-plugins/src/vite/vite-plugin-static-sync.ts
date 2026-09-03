import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-sync',
  description: 'Sync static files during Vite development with file watching and full-page reloads.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'sync',
    'watch',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/transomdesign/vite-plugin-static-sync',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-sync',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
