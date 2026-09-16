import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-i18n-codegen',
  description: 'Vite plugin that generates TypeScript translation files from flat JSON resources',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'codegen',
    'i18n',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-i18n-codegen',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-i18n-codegen',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
