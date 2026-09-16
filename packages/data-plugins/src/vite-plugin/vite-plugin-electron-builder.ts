import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-electron-builder',
  description: 'Easily Build Your vite With Electron',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'electron',
    'electron-builder',
  ],
  source: {
    github: '467057463/vite_plugin_electron_builder',
    npm: 'vite-plugin-electron-builder',
  },
  links: {
    github: 'https://github.com/467057463/vite_plugin_electron_builder',
    npm: 'https://www.npmjs.com/package/vite-plugin-electron-builder',
    website: 'https://github.com/467057463/vite_plugin_electron_builder#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 70,
      weekly: 8,
    },
  },
})
