import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@solar-republic/vite-plugin-web-extension',
  description: 'A vite plugin for generating cross browser platform, ES module based web extensions',
  version: '1.0.2-beta.1',
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
    npm: 'https://www.npmjs.com/package/@solar-republic/vite-plugin-web-extension',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
