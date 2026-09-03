import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ng-cache',
  description: 'Puts HTML partials in the Angular\'s $templateCache.',
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
  links: {
    github: 'https://github.com/clouway/rollup-plugin-ng-cache',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ng-cache',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
