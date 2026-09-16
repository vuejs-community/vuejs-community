import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-drupal-t',
  description: 'A Vite plugin that automatically extracts Drupal.t() and Drupal.formatPlural() translation calls for seamless internationalization',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'drupal',
    'translations',
    'i18n',
    'internationalization',
    'l10n',
    'localization',
    'drupal-t',
    'formatPlural',
  ],
  source: {
    github: 'rang501/vite-plugin-drupal-t',
    npm: 'vite-plugin-drupal-t',
  },
  links: {
    github: 'https://github.com/rang501/vite-plugin-drupal-t',
    npm: 'https://www.npmjs.com/package/vite-plugin-drupal-t',
    website: 'https://github.com/rang501/vite-plugin-drupal-t#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
