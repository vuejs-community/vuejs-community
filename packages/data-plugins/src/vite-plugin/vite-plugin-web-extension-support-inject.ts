import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-web-extension-support-inject',
  description: 'A vite plugin for generating cross browser platform, ES module based web extensions',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/samrum/vite-plugin-web-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-web-extension-support-inject',
    website: 'https://github.com/samrum/vite-plugin-web-extension#readme',
  },
  source: {
    github: 'samrum/vite-plugin-web-extension',
    npm: 'vite-plugin-web-extension-support-inject',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
