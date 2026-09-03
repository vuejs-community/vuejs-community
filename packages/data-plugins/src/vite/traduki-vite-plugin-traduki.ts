import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@traduki/vite-plugin-traduki',
  description: 'Vite plugin for Traduki',
  version: '0.11.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'messageformat',
    'pluralformat',
    'icu',
    'i18n',
    'L10n',
    'code-splitting',
    'translations',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/havelaer/traduki',
    npm: 'https://www.npmjs.com/package/@traduki/vite-plugin-traduki',
  },
  stats: {
    downloads: {
      monthly: 228,
      weekly: 70,
    },
  },
})
