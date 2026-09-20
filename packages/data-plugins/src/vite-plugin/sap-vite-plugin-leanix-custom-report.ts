import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sap/vite-plugin-leanix-custom-report',
  description: 'Vite plugin for developing SAP LeanIX Custom Reports',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'leanix',
  ],
  links: {
    github: 'https://github.com/SAP/leanix-custom-report-tools',
    npm: 'https://www.npmjs.com/package/@sap/vite-plugin-leanix-custom-report',
    website: 'https://github.com/SAP/leanix-custom-report-tools#readme',
  },
  source: {
    github: 'SAP/leanix-custom-report-tools',
    npm: '@sap/vite-plugin-leanix-custom-report',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1718,
      weekly: 424,
    },
  },
})
