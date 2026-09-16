import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mvr-studio/crxjs-vite-plugin',
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
    npm: '@mvr-studio/crxjs-vite-plugin',
  },
  links: {
    github: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
    npm: 'https://www.npmjs.com/package/@mvr-studio/crxjs-vite-plugin',
    website: 'https://github.com/crxjs/rollup-plugin-chrome-extension',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
