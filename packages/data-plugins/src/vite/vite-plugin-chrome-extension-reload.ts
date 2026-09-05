import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-chrome-extension-reload',
  description: 'Vite plugin for Chrome Extension auto reload with Manifest V3 support',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'chrome-extension',
    'hot-reload',
    'hmr',
    'manifest-v3',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-chrome-extension-reload',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
