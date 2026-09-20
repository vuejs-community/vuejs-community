import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-browser-extension',
  description: 'Rollup plugin for browser extensions.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'webextension',
    'browser',
    'extension',
  ],
  links: {
    github: 'https://github.com/jamen/rollup-plugin-browser-extension',
    npm: 'https://www.npmjs.com/package/rollup-plugin-browser-extension',
    website: 'https://github.com/jamen/rollup-plugin-browser-extension#readme',
  },
  source: {
    github: 'jamen/rollup-plugin-browser-extension',
    npm: 'rollup-plugin-browser-extension',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
