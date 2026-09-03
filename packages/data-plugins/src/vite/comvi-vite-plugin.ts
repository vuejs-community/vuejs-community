import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@comvi/vite-plugin',
  description: 'Vite plugin for Comvi — auto-generates TypeScript types from local translation files',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'i18n',
    'internationalization',
    'vite',
    'vite-plugin',
    'typescript',
    'typegen',
    'comvi',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/comvi-io/comvi-js',
    npm: 'https://www.npmjs.com/package/@comvi/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 51,
      weekly: 5,
    },
  },
})
