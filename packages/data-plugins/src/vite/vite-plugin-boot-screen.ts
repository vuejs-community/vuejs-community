import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-boot-screen',
  description: 'A Vite plugin for boot screen',
  icon: 'logos:vite-icon',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'splash-screen',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'new1333/vite-plugin-splash-screen',
    npm: 'vite-plugin-boot-screen',
  },
  links: {
    github: 'https://github.com/new1333/vite-plugin-splash-screen',
    npm: 'https://www.npmjs.com/package/vite-plugin-boot-screen',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
