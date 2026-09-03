import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'electron-ipc-auto-import',
  description: 'An Electron plugin for automatically discovering and registering type-safe IPC handlers, inspired by unplugin-auto-import.',
  version: '1.1.3',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/yyues/electron-ipc-auto-import',
    npm: 'https://www.npmjs.com/package/electron-ipc-auto-import',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
