import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@haruleekim/vite-plugin-web-extension',
  description: 'A vite plugin for generating cross browser platform, ES module based web extensions',
  version: '3.0.1',
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
  links: {
    github: 'https://github.com/samrum/vite-plugin-web-extension',
    npm: 'https://www.npmjs.com/package/@haruleekim/vite-plugin-web-extension',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
