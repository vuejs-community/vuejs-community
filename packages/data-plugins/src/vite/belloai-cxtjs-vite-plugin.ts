import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@belloai/cxtjs-vite-plugin',
  description: 'Build Chrome Extensions with this Vite plugin.',
  version: '0.0.1',
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
    npm: 'https://www.npmjs.com/package/@belloai/cxtjs-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 4,
    },
  },
})
