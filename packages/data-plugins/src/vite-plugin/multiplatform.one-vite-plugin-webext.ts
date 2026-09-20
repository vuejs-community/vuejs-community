import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@multiplatform.one/vite-plugin-webext',
  description: 'Vite config factories for building a browser web extension (MV3 views, background service worker, content scripts) as a target of a multiplatform.one One app — workspace source aliases, the one-server-only browser stub, Tamagui wiring, and the manifest/de',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'browser-extension',
    'multiplatform.one',
    'vite-plugin',
    'webext',
    'webextension',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@multiplatform.one/vite-plugin-webext',
    website: 'https://multiplatform.one',
  },
  source: {
    npm: '@multiplatform.one/vite-plugin-webext',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 3170,
      weekly: 855,
    },
  },
})
