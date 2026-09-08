import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-drupal-sdc-generator',
  description: 'This is a [Rollup](https://rollupjs.org) plugin that creates [single directory components](https://www.drupal.org/docs/develop/theming-drupal/using-single-directory-components) for embedding your app in a [Drupal](https://www.drupal.org) module or theme.',
  icon: 'logos:rollupjs',
  version: '1.2.23',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'drupal',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Exploratorium/rollup-plugin-drupal-sdc-generator',
    npm: 'rollup-plugin-drupal-sdc-generator',
  },
  links: {
    github: 'https://github.com/Exploratorium/rollup-plugin-drupal-sdc-generator',
    npm: 'https://www.npmjs.com/package/rollup-plugin-drupal-sdc-generator',
  },
  stats: {
    downloads: {
      monthly: 2293,
      weekly: 333,
    },
  },
})
