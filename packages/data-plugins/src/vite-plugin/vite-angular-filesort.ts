import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-angular-filesort',
  description: 'Vite plugin to sort AngularJS files by module dependencies (gulp-angular-filesort replacement)',
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
    'filesort',
    'dependency-sort',
    'topological-sort',
    'gulp-angular-filesort',
  ],
  source: {
    npm: 'vite-angular-filesort',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-angular-filesort',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
