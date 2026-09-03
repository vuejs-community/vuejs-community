import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@srymh/vite-plugin-electron',
  description: 'Vite 8 Environment API based plugin for integrating Electron main/preload build',
  version: '0.2.0-beta.6',
  category: 'plugin',
  tags: [
    'electron',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/srymh/vite-plugin-electron',
    npm: 'https://www.npmjs.com/package/@srymh/vite-plugin-electron',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
