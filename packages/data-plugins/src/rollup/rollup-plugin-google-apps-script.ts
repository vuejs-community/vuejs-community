import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-google-apps-script',
  description: 'Rollup plugin for Google Apps Script.',
  icon: 'logos:rollupjs',
  version: '2.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'Google Apps Script',
    'google-apps-scripts',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mato533/rollup-plugin-gas',
    npm: 'rollup-plugin-google-apps-script',
  },
  links: {
    github: 'https://github.com/mato533/rollup-plugin-gas',
    npm: 'https://www.npmjs.com/package/rollup-plugin-google-apps-script',
  },
  stats: {
    downloads: {
      monthly: 1103,
      weekly: 315,
    },
  },
})
