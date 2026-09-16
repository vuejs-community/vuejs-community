import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-ng-annotate',
  description: 'Vite plugin that adds AngularJS dependency injection annotations',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'angularjs',
    'angular',
    'ng-annotate',
    'dependency-injection',
    'minification',
  ],
  source: {
    npm: 'vite-ng-annotate',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-ng-annotate',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 499,
      weekly: 41,
    },
  },
})
