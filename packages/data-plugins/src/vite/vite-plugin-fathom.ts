import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fathom',
  description: 'Vite plugin for adding fathom',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'fathom',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'robbevp/vite-plugin-fathom',
    npm: 'vite-plugin-fathom',
  },
  links: {
    github: 'https://github.com/robbevp/vite-plugin-fathom',
    npm: 'https://www.npmjs.com/package/vite-plugin-fathom',
  },
  stats: {
    downloads: {
      monthly: 1000,
      weekly: 255,
    },
  },
})
