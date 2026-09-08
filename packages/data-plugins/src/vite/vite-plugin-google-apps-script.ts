import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-google-apps-script',
  description: 'Vite plugin for HtmlService on GoogleAppsScript via @google/clasp',
  icon: 'logos:vite-icon',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'vite',
    'googleappsscript',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'luthpg/vite-plugin-google-apps-script',
    npm: 'vite-plugin-google-apps-script',
  },
  links: {
    github: 'https://github.com/luthpg/vite-plugin-google-apps-script',
    npm: 'https://www.npmjs.com/package/vite-plugin-google-apps-script',
  },
  stats: {
    downloads: {
      monthly: 117,
      weekly: 8,
    },
  },
})
