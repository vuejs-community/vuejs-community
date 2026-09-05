import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lingo',
  description: 'Visual translation editor for .po files in Vite projects',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'i18n',
    'translation',
    'po',
    'gettext',
    'localization',
    'wuchale',
    'svelte',
    'editor',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Michael-Obele/vite-plugin-lingo',
    npm: 'https://www.npmjs.com/package/vite-plugin-lingo',
  },
  stats: {
    downloads: {
      monthly: 1283,
      weekly: 349,
    },
  },
})
