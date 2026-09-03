import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'ue-webview-bridge-vite',
  description: 'Vite plugin for UE WebView Bridge - Automatically integrate UE WebView bridge functionality at build time',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'unreal-engine',
    'ue',
    'webview',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/ue-webview-bridge-vite',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
