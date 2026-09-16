import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vinxi/chrome-extension',
  description: 'Build Chrome Extensions with this Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'crxjs/rollup-plugin-chrome-extension',
    npm: '@vinxi/chrome-extension',
  },
  links: {
    github: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/@vinxi/chrome-extension',
    website: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
