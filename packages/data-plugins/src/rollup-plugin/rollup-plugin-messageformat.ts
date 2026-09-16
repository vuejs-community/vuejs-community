import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-messageformat',
  description: 'Rollup plugin for MessageFormat',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  source: {
    github: 'messageformat/messageformat',
    npm: 'rollup-plugin-messageformat',
  },
  links: {
    github: 'https://github.com/messageformat/messageformat',
    npm: 'https://www.npmjs.com/package/rollup-plugin-messageformat',
    website: 'https://messageformat.github.io/',
  },
  stats: {
    stars: 1769,
    downloads: {
      monthly: 137,
      weekly: 37,
    },
  },
})
