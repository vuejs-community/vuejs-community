import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@localive/vite',
  description: 'Vite dev-server plugin that writes your Localive edits back to the locale files.',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'i18n',
    'vite',
    'vite-plugin',
    'translation',
    'localization',
    'live-editing',
    'localive',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Arigatouz/localive',
    npm: 'https://www.npmjs.com/package/@localive/vite',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 8,
    },
  },
})
