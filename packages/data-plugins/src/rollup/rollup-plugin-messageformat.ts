import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-messageformat',
  description: 'Rollup plugin for MessageFormat',
  icon: 'logos:rollupjs',
  version: '3.0.0',
  category: 'plugin',
  tags: [
    'i18n',
    'pluralformat',
    'icu',
    'selectformat',
    'messageformat',
    'internationalization',
    'json',
    'yaml',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'messageformat/messageformat',
    npm: 'rollup-plugin-messageformat',
  },
  links: {
    github: 'https://github.com/messageformat/messageformat',
    npm: 'https://www.npmjs.com/package/rollup-plugin-messageformat',
  },
  stats: {
    downloads: {
      monthly: 121,
      weekly: 29,
    },
  },
})
