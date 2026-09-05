import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-angular-mgm',
  description: 'Angular2 template and styles inliner. Forked from rollup-plugin-angular',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'angular2',
    'template',
    'styles',
    'inliner',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/mgm87/rollup-plugin-angular',
    npm: 'https://www.npmjs.com/package/rollup-plugin-angular-mgm',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
