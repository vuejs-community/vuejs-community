import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lingo',
  description: 'Visual translation editor for .po files in Vite projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Michael-Obele/vite-plugin-lingo',
    npm: 'https://www.npmjs.com/package/vite-plugin-lingo',
    website: 'https://github.com/Michael-Obele/vite-plugin-lingo#readme',
  },
  source: {
    github: 'Michael-Obele/vite-plugin-lingo',
    npm: 'vite-plugin-lingo',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 1623,
      weekly: 409,
    },
  },
})
