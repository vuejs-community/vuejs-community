import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'plugin-vite-electron-renderer',
  description: 'Modern Vite plugin for Electron Renderer - Support Node.js API in Electron Renderer process',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'electron',
    'electron-renderer',
    'node-integration',
    'esm',
    'cjs',
  ],
  links: {
    github: 'https://github.com/dmazzella/plugin-vite-electron-renderer',
    npm: 'https://www.npmjs.com/package/plugin-vite-electron-renderer',
    website: 'https://github.com/dmazzella/plugin-vite-electron-renderer#readme',
  },
  source: {
    github: 'dmazzella/plugin-vite-electron-renderer',
    npm: 'plugin-vite-electron-renderer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 6,
    },
  },
})
