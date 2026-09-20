import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'howdygo-rollup-plugin-chrome-extension',
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
    github: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/howdygo-rollup-plugin-chrome-extension',
    website: 'https://github.com/crxjs/rollup-plugin-chrome-extension#readme',
  },
  source: {
    github: 'crxjs/rollup-plugin-chrome-extension',
    npm: 'howdygo-rollup-plugin-chrome-extension',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 88,
      weekly: 58,
    },
  },
})
