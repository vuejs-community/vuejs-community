import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-angularjs-annotate',
  description: 'AngularJS dependency injection annotations for Rolldown without a Babel transform layer',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'angularjs',
    'dependency-injection',
    'ng-annotate',
    'rolldown',
    'rolldown-plugin',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/pioug/rolldown-plugin-angularjs-annotate',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-angularjs-annotate',
  },
  stats: {
    downloads: {
      monthly: 1024,
      weekly: 249,
    },
  },
})
