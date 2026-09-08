import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-web-extension-support-inject',
  description: 'A vite plugin for generating cross browser platform, ES module based web extensions',
  icon: 'logos:vite-icon',
  version: '5.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'web',
    'extension',
    'browser',
    'chrome',
    'firefox',
    'edge',
    'manifest',
    'manifest V2',
    'manifest V3',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'samrum/vite-plugin-web-extension',
    npm: 'vite-plugin-web-extension-support-inject',
  },
  links: {
    github: 'https://github.com/samrum/vite-plugin-web-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-web-extension-support-inject',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
