import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-use-electron',
  description: 'A Vite plugin to simplify using Electron APIs in the renderer process',
  version: '0.2.12',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'electron',
    'renderer',
    'ipc',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/brettlamy/vite-plugin-use-electron',
    npm: 'https://www.npmjs.com/package/vite-plugin-use-electron',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
