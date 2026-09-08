import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-electron-utility-process',
  description: 'Vite plugin for ?utilityProcess imports — emits Electron UtilityProcess entry chunks with a fork() factory',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'electron',
    'utility-process',
    'utilityProcess',
    'fork',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'linonetwo/vite-plugin-electron-utility-process',
    npm: 'vite-plugin-electron-utility-process',
  },
  links: {
    github: 'https://github.com/linonetwo/vite-plugin-electron-utility-process',
    npm: 'https://www.npmjs.com/package/vite-plugin-electron-utility-process',
  },
  stats: {
    downloads: {
      monthly: 181,
      weekly: 23,
    },
  },
})
