import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-yaml-locales',
  description: 'Converts a single YAML file to multiple messages.json locale files',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'chrome-extension',
    'browser-extension',
    'yaml',
    'i18n',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ukhan/rollup-plugin-yaml-locales',
    npm: 'https://www.npmjs.com/package/rollup-plugin-yaml-locales',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
