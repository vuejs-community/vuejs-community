import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ember-intl/vite',
  description: 'Loads translations in v2 apps with ember-intl',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ember',
    'ember-intl',
    'i18n',
    'internationalization',
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'ember-intl/ember-intl',
    npm: '@ember-intl/vite',
  },
  links: {
    github: 'https://github.com/ember-intl/ember-intl',
    npm: 'https://www.npmjs.com/package/@ember-intl/vite',
    website: 'https://ember-intl.github.io/ember-intl/',
  },
  stats: {
    stars: 439,
    downloads: {
      monthly: 28872,
      weekly: 5524,
    },
  },
})
