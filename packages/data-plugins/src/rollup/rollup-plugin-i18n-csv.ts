import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-i18n-csv',
  description: 'Rollup plugin to convert CSV i18n definitions into nested JavaScript objects',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'i18n',
    'csv',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/voodoochild/rollup-plugin-i18n-csv',
    npm: 'https://www.npmjs.com/package/rollup-plugin-i18n-csv',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
