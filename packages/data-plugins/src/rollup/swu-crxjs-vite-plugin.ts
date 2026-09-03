import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@swu/crxjs-vite-plugin',
  description: 'Build Chrome Extensions with this Vite plugin.',
  version: '2.0.0-beta.17-2',
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
    npm: 'https://www.npmjs.com/package/@swu/crxjs-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
