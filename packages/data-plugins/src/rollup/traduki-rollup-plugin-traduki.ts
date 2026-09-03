import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@traduki/rollup-plugin-traduki',
  description: 'Rollup plugin for Traduki',
  version: '0.11.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'messageformat',
    'pluralformat',
    'icu',
    'i18n',
    'L10n',
    'code-splitting',
    'translations',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/havelaer/traduki',
    npm: 'https://www.npmjs.com/package/@traduki/rollup-plugin-traduki',
  },
  stats: {
    downloads: {
      monthly: 220,
      weekly: 65,
    },
  },
})
