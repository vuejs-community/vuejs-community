import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@solar-republic/vite-plugin-web-extension',
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
  source: {
    github: 'samrum/vite-plugin-web-extension',
    npm: '@solar-republic/vite-plugin-web-extension',
  },
  links: {
    github: 'https://github.com/samrum/vite-plugin-web-extension',
    npm: 'https://www.npmjs.com/package/@solar-republic/vite-plugin-web-extension',
    website: 'https://github.com/samrum/vite-plugin-web-extension#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
