import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vinxi/chrome-extension',
  description: 'Build Chrome Extensions with this Vite plugin.',
  version: '2.0.0',
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
    github: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/@vinxi/chrome-extension',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
