import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-electron-actions',
  description: 'This plugin brings a React `"use server"`-style workflow to Electron. Add `"use node"` to an async function to run it in the main process while calling it like a local function from the renderer. The plugin generates the IPC bridge, replaces the renderer ',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'electron',
    'electron-actions',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jjeem/vite-plugin-electron-actions',
    npm: 'https://www.npmjs.com/package/vite-plugin-electron-actions',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 1,
    },
  },
})
