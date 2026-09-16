import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@swu/crxjs-vite-plugin',
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
    npm: '@swu/crxjs-vite-plugin',
  },
  links: {
    github: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/@swu/crxjs-vite-plugin',
    website: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
