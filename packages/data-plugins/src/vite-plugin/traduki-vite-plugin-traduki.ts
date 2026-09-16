import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@traduki/vite-plugin-traduki',
  description: 'Vite plugin for Traduki',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'havelaer/traduki',
    npm: '@traduki/vite-plugin-traduki',
  },
  links: {
    github: 'https://github.com/havelaer/traduki',
    npm: 'https://www.npmjs.com/package/@traduki/vite-plugin-traduki',
    website: 'https://github.com/havelaer/traduki#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 154,
      weekly: 8,
    },
  },
})
