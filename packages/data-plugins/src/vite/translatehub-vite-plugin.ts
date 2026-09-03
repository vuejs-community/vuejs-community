import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@translatehub/vite-plugin',
  description: 'Vite plugin — downloads translations from TranslateHub at build time and generates TypeScript types',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'i18n',
    'translatehub',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@translatehub/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
