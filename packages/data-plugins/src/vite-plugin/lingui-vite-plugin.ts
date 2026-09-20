import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lingui/vite-plugin',
  description: 'Vite plugin that compiles Lingui message catalogs on the fly, so .po files can be imported directly',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lingui',
    'linguijs',
    'vite',
    'vite-plugin',
    'i18n',
    'message-catalog',
    'internationalization',
    'localization',
    'translation',
    'icu-messageformat',
  ],
  links: {
    github: 'https://github.com/lingui/js-lingui',
    npm: 'https://www.npmjs.com/package/@lingui/vite-plugin',
    website: 'https://lingui.dev',
  },
  source: {
    github: 'lingui/js-lingui',
    npm: '@lingui/vite-plugin',
  },
  stats: {
    stars: 5876,
    downloads: {
      monthly: 2242522,
      weekly: 452379,
    },
  },
})
