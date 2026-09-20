import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@translatehub/vite-plugin',
  description: 'Vite plugin — downloads translations from TranslateHub at build time and generates TypeScript types',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'i18n',
    'translatehub',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@translatehub/vite-plugin',
    website: 'https://translate-hub.ru',
  },
  source: {
    npm: '@translatehub/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
