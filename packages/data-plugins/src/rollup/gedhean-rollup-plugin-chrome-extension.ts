import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gedhean/rollup-plugin-chrome-extension',
  description: 'Build Chrome Extensions with this Rollup plugin.',
  version: '3.6.7',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'chrome',
    'chrome-extension',
    'extension',
    'webext',
    'webextension',
    'browser',
    'browser-extension',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/extend-chrome/rollup-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/@gedhean/rollup-plugin-chrome-extension',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 7,
    },
  },
})
