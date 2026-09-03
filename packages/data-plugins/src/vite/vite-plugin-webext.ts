import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-webext',
  description: 'A vite plugin for generating cross browser platform, ES module based web extensions',
  version: '1.2.18',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'web-extension',
    'chrome-extension',
    'extension',
    'addon',
    'browser',
    'chrome',
    'firefox',
    'edge',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/graygalaxy/vite-webext',
    npm: 'https://www.npmjs.com/package/vite-plugin-webext',
  },
  stats: {
    downloads: {
      monthly: 75,
      weekly: 8,
    },
  },
})
