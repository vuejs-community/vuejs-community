import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ue-webview-bridge-vite',
  description: 'Vite plugin for UE WebView Bridge - Automatically integrate UE WebView bridge functionality at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'unreal-engine',
    'ue',
    'webview',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/ue-webview-bridge-vite',
  },
  source: {
    npm: 'ue-webview-bridge-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
