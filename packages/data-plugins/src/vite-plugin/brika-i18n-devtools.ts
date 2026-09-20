import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@brika/i18n-devtools',
  description: 'i18n developer tools — Vite plugin + React overlay for translation validation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'brika',
    'i18n',
    'vite-plugin',
    'devtools',
    'translations',
  ],
  links: {
    github: 'https://github.com/brikalabs/brika',
    npm: 'https://www.npmjs.com/package/@brika/i18n-devtools',
  },
  source: {
    github: 'brikalabs/brika',
    npm: '@brika/i18n-devtools',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
