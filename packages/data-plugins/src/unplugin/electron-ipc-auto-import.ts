import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'electron-ipc-auto-import',
  description: 'An Electron plugin for automatically discovering and registering type-safe IPC handlers, inspired by unplugin-auto-import.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'electron',
    'ipc',
    'unplugin',
    'vite',
    'webpack',
    'auto-import',
    'type-safe',
    'contextBridge',
  ],
  links: {
    github: 'https://github.com/yyues/electron-ipc-auto-import',
    npm: 'https://www.npmjs.com/package/electron-ipc-auto-import',
    website: 'https://github.com/yyues/electron-ipc-auto-import#readme',
  },
  source: {
    github: 'yyues/electron-ipc-auto-import',
    npm: 'electron-ipc-auto-import',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
