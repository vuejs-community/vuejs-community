import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@traduki/rollup-plugin-traduki',
  description: 'Rollup plugin for Traduki',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  source: {
    github: 'havelaer/traduki',
    npm: '@traduki/rollup-plugin-traduki',
  },
  links: {
    github: 'https://github.com/havelaer/traduki',
    npm: 'https://www.npmjs.com/package/@traduki/rollup-plugin-traduki',
    website: 'https://github.com/havelaer/traduki#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 145,
      weekly: 8,
    },
  },
})
