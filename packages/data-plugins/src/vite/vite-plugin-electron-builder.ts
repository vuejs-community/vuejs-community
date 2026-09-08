import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-electron-builder',
  description: 'Easily Build Your vite With Electron',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'electron',
    'electron-builder',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '467057463/vite_plugin_electron_builder',
    npm: 'vite-plugin-electron-builder',
  },
  links: {
    github: 'https://github.com/467057463/vite_plugin_electron_builder',
    npm: 'https://www.npmjs.com/package/vite-plugin-electron-builder',
  },
  stats: {
    downloads: {
      monthly: 110,
      weekly: 15,
    },
  },
})
