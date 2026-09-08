import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-webext',
  description: 'A vite plugin for generating cross browser platform, ES module based web extensions',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'graygalaxy/vite-webext',
    npm: 'vite-plugin-webext',
  },
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
