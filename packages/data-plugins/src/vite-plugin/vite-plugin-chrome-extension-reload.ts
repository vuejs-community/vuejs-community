import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-chrome-extension-reload',
  description: 'Vite plugin for Chrome Extension auto reload with Manifest V3 support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'chrome-extension',
    'hot-reload',
    'hmr',
    'manifest-v3',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-chrome-extension-reload',
  },
  source: {
    npm: 'vite-plugin-chrome-extension-reload',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
