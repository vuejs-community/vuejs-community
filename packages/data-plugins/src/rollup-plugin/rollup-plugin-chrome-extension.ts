import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-chrome-extension',
  description: 'Build Chrome Extensions with this Rollup plugin.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
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
    npm: 'rollup-plugin-chrome-extension',
  },
  links: {
    github: 'https://github.com/crxjs/chrome-extension-tools',
    npm: 'https://www.npmjs.com/package/rollup-plugin-chrome-extension',
    website: 'https://www.extend-chrome.dev/rollup-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10444,
      weekly: 2294,
    },
  },
})
