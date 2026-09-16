import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@crxjs/vite-plugin',
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
    github: 'crxjs/chrome-extension-tools',
    npm: '@crxjs/vite-plugin',
  },
  links: {
    github: 'https://github.com/crxjs/chrome-extension-tools',
    npm: 'https://www.npmjs.com/package/@crxjs/vite-plugin',
    website: 'https://crxjs.dev/vite-plugin',
  },
  stats: {
    stars: 4170,
    downloads: {
      monthly: 1349281,
      weekly: 285625,
    },
  },
})
