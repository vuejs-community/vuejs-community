import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@apad/vite-plugin',
  description: 'Build Chrome Extensions with this Vite plugin.',
  version: '2.0.2',
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
    npm: 'https://www.npmjs.com/package/@apad/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 6,
    },
  },
})
