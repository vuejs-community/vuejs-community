import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@byteyilabs/crxjs-vite-plugin',
  description: 'Build Chrome Extensions with this Vite plugin.',
  version: '2.0.0-beta.23.1',
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
    npm: 'https://www.npmjs.com/package/@byteyilabs/crxjs-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 6,
    },
  },
})
