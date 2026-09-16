import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-use-electron',
  description: 'A Vite plugin to simplify using Electron APIs in the renderer process',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'electron',
    'renderer',
    'ipc',
  ],
  source: {
    github: 'brettlamy/vite-plugin-use-electron',
    npm: 'vite-plugin-use-electron',
  },
  links: {
    github: 'https://github.com/brettlamy/vite-plugin-use-electron',
    npm: 'https://www.npmjs.com/package/vite-plugin-use-electron',
    website: 'https://github.com/brettlamy/vite-plugin-use-electron#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
