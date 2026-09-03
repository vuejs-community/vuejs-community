import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'plugin-vite-electron-renderer',
  description: 'Modern Vite plugin for Electron Renderer - Support Node.js API in Electron Renderer process',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'electron',
    'electron-renderer',
    'node-integration',
    'esm',
    'cjs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dmazzella/plugin-vite-electron-renderer',
    npm: 'https://www.npmjs.com/package/plugin-vite-electron-renderer',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 0,
    },
  },
})
