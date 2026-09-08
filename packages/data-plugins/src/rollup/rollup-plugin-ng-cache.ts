import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ng-cache',
  description: 'Puts HTML partials in the Angular\'s $templateCache.',
  icon: 'logos:rollupjs',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'angular',
    'template',
    'cache',
    'rollup',
    'plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'clouway/rollup-plugin-ng-cache',
    npm: 'rollup-plugin-ng-cache',
  },
  links: {
    github: 'https://github.com/clouway/rollup-plugin-ng-cache',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ng-cache',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
