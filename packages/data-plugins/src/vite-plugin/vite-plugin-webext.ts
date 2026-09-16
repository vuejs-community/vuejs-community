import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-webext',
  description: 'A vite plugin for generating cross browser platform, ES module based web extensions',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'graygalaxy/vite-webext',
    npm: 'vite-plugin-webext',
  },
  links: {
    github: 'https://github.com/graygalaxy/vite-webext',
    npm: 'https://www.npmjs.com/package/vite-plugin-webext',
    website: 'https://github.com/graygalaxy/vite-webext#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
