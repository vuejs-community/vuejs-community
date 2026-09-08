import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-browser-extension',
  description: 'Rollup plugin for browser extensions.',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'webextension',
    'browser',
    'extension',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jamen/rollup-plugin-browser-extension',
    npm: 'rollup-plugin-browser-extension',
  },
  links: {
    github: 'https://github.com/jamen/rollup-plugin-browser-extension',
    npm: 'https://www.npmjs.com/package/rollup-plugin-browser-extension',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
