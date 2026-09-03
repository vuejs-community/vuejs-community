import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-i18n-types',
  description: 'Vite plugin to generate TypeScript types from localization-like JSON files (e.g., i18n keys).',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'localization',
    'i18n',
    'typescript',
    'types',
    'json',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vadimpashkov/vite-plugin-i18n-types',
    npm: 'https://www.npmjs.com/package/vite-plugin-i18n-types',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
