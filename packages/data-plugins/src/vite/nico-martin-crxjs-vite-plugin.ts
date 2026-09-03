import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nico-martin/crxjs-vite-plugin',
  description: 'Build Chrome Extensions with this Vite plugin.',
  version: '2.0.1-beta.3',
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
    github: 'https://github.com/nico-martin/chrome-extension-tools',
    npm: 'https://www.npmjs.com/package/@nico-martin/crxjs-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
