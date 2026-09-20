import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@srymh/vite-plugin-electron',
  description: 'Vite 8 Environment API based plugin for integrating Electron main/preload build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'electron',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/srymh/vite-plugin-electron',
    npm: 'https://www.npmjs.com/package/@srymh/vite-plugin-electron',
    website: 'https://srymh.github.io/vite-plugin-electron/',
  },
  source: {
    github: 'srymh/vite-plugin-electron',
    npm: '@srymh/vite-plugin-electron',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
