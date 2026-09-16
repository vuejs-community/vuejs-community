import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wuchale/astro',
  description: 'Wuchale i18n adapter for Astro files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'internationalization',
    'translation',
    'gettext',
    'astro',
    'withastro',
    'vite',
    'po',
    'vite-plugin',
    'compile-time',
    'ast',
    'translation-tooling',
    'multilingual',
    'localization',
    'l10n',
    'automatic-i18n',
  ],
  source: {
    github: 'wuchalejs/wuchale',
    npm: '@wuchale/astro',
  },
  links: {
    github: 'https://github.com/wuchalejs/wuchale',
    npm: 'https://www.npmjs.com/package/@wuchale/astro',
    website: 'https://wuchale.dev',
  },
  stats: {
    stars: 408,
    downloads: {
      monthly: 563,
      weekly: 37,
    },
  },
})
