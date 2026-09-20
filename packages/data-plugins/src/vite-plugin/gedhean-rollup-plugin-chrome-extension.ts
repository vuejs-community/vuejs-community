import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gedhean/rollup-plugin-chrome-extension',
  description: 'Build Chrome Extensions with this Rollup plugin.',
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
  links: {
    github: 'https://github.com/extend-chrome/rollup-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/@gedhean/rollup-plugin-chrome-extension',
    website: 'https://github.com/extend-chrome/rollup-plugin-chrome-extension#readme',
  },
  source: {
    github: 'extend-chrome/rollup-plugin-chrome-extension',
    npm: '@gedhean/rollup-plugin-chrome-extension',
  },
  stats: {
    stars: 4170,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
