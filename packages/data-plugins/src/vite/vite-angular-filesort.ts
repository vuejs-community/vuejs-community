import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-angular-filesort',
  description: 'Vite plugin to sort AngularJS files by module dependencies (gulp-angular-filesort replacement)',
  version: '1.0.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-angular-filesort',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
