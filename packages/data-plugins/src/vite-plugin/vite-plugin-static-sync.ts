import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-sync',
  description: 'Sync static files during Vite development with file watching and full-page reloads.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'sync',
    'watch',
  ],
  source: {
    github: 'transomdesign/vite-plugin-static-sync',
    npm: 'vite-plugin-static-sync',
  },
  links: {
    github: 'https://github.com/transomdesign/vite-plugin-static-sync',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-sync',
    website: 'https://github.com/transomdesign/vite-plugin-static-sync#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
