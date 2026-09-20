import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-i18n-csv',
  description: 'Rollup plugin to convert CSV i18n definitions into nested JavaScript objects',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'i18n',
    'csv',
  ],
  links: {
    github: 'https://github.com/voodoochild/rollup-plugin-i18n-csv',
    npm: 'https://www.npmjs.com/package/rollup-plugin-i18n-csv',
    website: 'https://github.com/voodoochild/rollup-plugin-i18n-csv#readme',
  },
  source: {
    github: 'voodoochild/rollup-plugin-i18n-csv',
    npm: 'rollup-plugin-i18n-csv',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
