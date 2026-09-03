import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@b2network/crxjs-vite-plugin',
  description: 'Build Chrome Extensions with this Vite plugin.',
  version: '2.0.0-beta.21',
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
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/@b2network/crxjs-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
