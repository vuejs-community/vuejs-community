import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@localive/vite',
  description: 'Vite dev-server plugin that writes your Localive edits back to the locale files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'vite',
    'vite-plugin',
    'translation',
    'localization',
    'live-editing',
    'localive',
  ],
  links: {
    github: 'https://github.com/Arigatouz/localive',
    npm: 'https://www.npmjs.com/package/@localive/vite',
    website: 'https://localive.vercel.app/plugins/vite/',
  },
  source: {
    github: 'Arigatouz/localive',
    npm: '@localive/vite',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 35,
      weekly: 5,
    },
  },
})
